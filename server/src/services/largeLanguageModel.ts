import { HfInference } from '@huggingface/inference'
import OpenAI from "openai"
require('dotenv').config()

// interfaces for huggingface query, may be deleted if huggingface integration is removed
interface Parameters {
    min_length?: number, // integer
    max_length?: number, // integer
    top_k?: number, // integer
    top_p?: number, // float
    temperature?: number, // float 0.0 - 100.0
    repetition_penalty?: number // float 0.0 - 100.0
}

interface Options {
    use_cache?: boolean, // default true
    wait_for_model?: boolean // default false
}

interface Request {
    inputs: string,
    parameters?: Parameters,
    options?: Options
}


// functions
// Makes a request to Huggingface Inference API
export async function query(request: Request) {

    // Connection requirements
    const MODEL = 'google/flan-t5-xxl'
    // const ENDPOINT = `https://api-inference.huggingface.co/models/${MODEL}`
    const API_TOKEN = process.env.HUGGINGFACE_API_TOKEN
    const hf = new HfInference(API_TOKEN)


    if (!API_TOKEN) return "Missing API TOKEN"

    /*const config = {
        headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}` 
        }
    }*/

	return await hf.textGeneration({
        model: MODEL,
        inputs: request.inputs
    }).then((response) => {
        console.log(response.generated_text)
        return response.generated_text
    })
    .catch((error) => {
        console.log('Error sending prompt')
        throw (error)
    })
}

// Makes a request to OpenAI's API
export async function gptquery(prompt: string, oai?: OpenAI) {
    const API_TOKEN = process.env.OPENAI_API_TOKEN
    const MODEL = 'gpt-3.5-turbo'

    if (!API_TOKEN) return "Missing API TOKEN"

    const openai = (oai)? oai : new OpenAI({
        apiKey: API_TOKEN,
    })

    return await openai.chat.completions.create({
        model: MODEL,
        messages: [{ role: 'user', content: prompt }],
    }).then((response:any) => {
        console.log(response)
        return response.choices[0].message.content
    })

}