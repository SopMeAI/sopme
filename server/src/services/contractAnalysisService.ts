import {
  TextractClient,
  AnalyzeDocumentCommand,
  type AnalyzeDocumentCommandOutput,
} from '@aws-sdk/client-textract'

import {
  ApiBlockType,
  ApiSelectionStatus,
} from 'amazon-textract-response-parser/dist/types/api-models'

import {
  type ApiAnalyzeDocumentResponse,
  TextractDocument,
  SelectionElement,
} from 'amazon-textract-response-parser'

import { env } from '../env'

const MIN_CONFIDENCE = 30

type ContractData = {
  text: string
  checkboxes: Checkbox[]
}

type Checkbox = {
  isSelected: boolean
  label: string
}

const config = {
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
}

const textractClient = new TextractClient(config)

export async function getContractData(
  imageBytes: Buffer,
  client: TextractClient = textractClient,
): Promise<ContractData> {
  const document = await analyzeDocument(imageBytes, client)
  const text = getText(document)
  const checkboxes = getCheckboxes(document)
  return { text, checkboxes }
}

export async function analyzeDocument(
  imageBytes: Buffer,
  client: TextractClient = textractClient,
): Promise<TextractDocument> {
  const textractInput = {
    Document: {
      Bytes: imageBytes,
    },
    FeatureTypes: ['FORMS'],
  }
  const analyzeCommand = new AnalyzeDocumentCommand(textractInput)
  try {
    const response = await client.send(analyzeCommand)
    const document = createTextractDocument(response)
    return document
  } catch (error) {
    throw new Error(`Error analyzing document: ${error}`)
  }
}

export function getText(document: TextractDocument): string {
  let text = ''
  for (const block of document.listBlocks()) {
    if (block.BlockType === ApiBlockType.Line) {
      text += block.Text + '\n'
    }
  }

  return text
}

export function getCheckboxes(document: TextractDocument): Checkbox[] {
  const checkboxes = [] as Checkbox[]
  for (const field of document.form.iterFields()) {
    if (field.confidence < MIN_CONFIDENCE) {
      continue
    }
    if (field?.value) {
      for (const content of field.value.listContent()) {
        if (content instanceof SelectionElement) {
          const checkbox = {
            isSelected: content.selectionStatus === ApiSelectionStatus.Selected,
            label: field.key.text,
          }
          checkboxes.push(checkbox)
        }
      }
    }
  }
  return checkboxes
}

export function getContractDataString(contractData: ContractData): string {
  const { text, checkboxes } = contractData
  const textData = `Text:\n${text}\nCheckboxes:\n${JSON.stringify(checkboxes, null, 2)}`
  return textData
}

export function createTextractDocument(output: AnalyzeDocumentCommandOutput): TextractDocument {
  /*
  The ApiResponsePage input interface exposed and expected by this module is subtly different from - 
  but functionally compatible with - the output types produced by the AWS SDK for JavaScript Textract Client.
  https://github.com/aws-samples/amazon-textract-response-parser/tree/master/src-js#loading-data
  */
  const apiAnalyzeDocumentResponse = output as unknown as ApiAnalyzeDocumentResponse
  const document = new TextractDocument(apiAnalyzeDocumentResponse)
  return document
}
