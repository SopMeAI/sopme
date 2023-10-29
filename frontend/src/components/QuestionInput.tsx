import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    const promptAnswer = SendPromptToGpt(values.question, GPT_API_URL);
    console.log(promptAnswer);
  }
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question related to your Contract</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  Ask question related to your contract
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default QuestionInput;
