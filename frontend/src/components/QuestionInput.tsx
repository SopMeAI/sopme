import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { SendPromptToGpt } from "@/services/apiService";
import { GPT_API_URL } from "@/config/config";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const formSchema = z.object({
  question: z.string().min(2, {
    message: "Question cannot be empty",
  }),
});

const QuestionInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  const [fullConversation, setFullConversation] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setDisabled(true);
    form.reset();
    try {
      const response = await SendPromptToGpt(values.question, GPT_API_URL);
      if (!response.ok) {
        throw new Error("Error in sending prompt to GPT");
      }
      if (response.ok) {
        setDisabled(false);
      }
      const responseData = await response.json();
      const answer = responseData.FullResponse;
      setFullConversation((prevConversation) => [
        ...prevConversation,
        values.question,
        answer,
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
  }

  useEffect(() => {
    const eventSource = new EventSource(
      GPT_API_URL.replace("/questions", "/sse")
    );

    eventSource.onmessage = function (event) {
      const data = JSON.parse(event.data);

      console.log("New update from GPT-3:", data);
    };
    eventSource.onopen = function () {};
    eventSource.onerror = function (error) {
      console.error("EventSource error:", error);
    };

    return () => {
      eventSource.close();
    };
  }, []);
  console.log("messages", fullConversation);
  return (
    <div className="max-w-4xl mx-auto p-4 w-[1200px]">
      <h1>Contract support chat</h1>
      <Card className="">
        <CardHeader>
          <CardTitle>
            <CardContent>
              <div className="test-area bg-white shadow rounded p-4 max-h-80 h-64 overflow-y-auto w-">
                {fullConversation.map((item, index) => (
                  <p
                    key={index}
                    className={`text-sm font-normal text-left ${
                      index % 2 === 0 ? "text-blue-500" : "text-green-500"
                    }`}
                  >
                    {item}
                  </p>
                ))}

                {disabled && (
                  <div className="text-center">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </CardTitle>
        </CardHeader>
      </Card>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-auto"
        >
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel> Ask Question related to your Contract</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter question related to your contract"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={disabled} type="submit">
            {disabled && (
              <svg
                aria-hidden={disabled}
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuestionInput;
