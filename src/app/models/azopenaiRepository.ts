import { AzureKeyCredential, OpenAIClient } from '@azure/openai';

      const endpoint = process.env.AZURE_OPENAI_ENDPOINT!;
      const azureApiKey = process.env.AZURE_OPENAI_API_KEY!;
      const deploymentId = process.env.AZURE_OPENAI_DEPLOYMENT_ID!;
      
      
export class AzOpenaiRepository {
  
  async getAzOpenAIData(message: string  , userId: string,) {
    console.log('start', process.env.AZURE_OPENAI_ENDPOINT!,);
    return new Promise(async (resolve, reject) => {
      console.log(message,"koko")
      const content = `
      ¥n${message}
      `;

      try {
          const messages = [
            { role: 'system', content: 'you are helpful assistant' },
            {
              role: 'user',
              content,
            },
        ];
        const client = new OpenAIClient(
          endpoint,
          new AzureKeyCredential(azureApiKey)
        );

        const result = await client.getChatCompletions(deploymentId, messages);
        resolve(result.choices);
      } catch (error: any) {
        console.log(
          '🚀 ~ file: openaiRepository.ts:29 ~ AzOpenaiRepository ~ returnnewPromise ~ error:',
          error
        );
        reject(error);
      }
    });
  }
}

