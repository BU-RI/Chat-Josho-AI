import { AzureKeyCredential, OpenAIClient } from '@azure/openai';


      const endpoint = process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT!;
      const azureApiKey = process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY!;
      const deploymentId = process.env.NEXT_PUBLIC_AZURE_OPENAI_DEPLOYMENT_ID!;
      
      
export class AzOpenaiRepository {
  
  async getAzOpenAIData(message: string  , userId: string,) {
    console.log('start', process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT!,);
    return new Promise(async (resolve, reject) => {
      const content = `
      ¥n${message}
      `
      ;

      try {
          const messages = [
            { role: 'system', content: 'You are my friend 30文字以内 日本語 ため口で答えてください' },
            {
              role: 'user',
              content,
            },
        ];
        const aiclient = new OpenAIClient(
          endpoint,
          new AzureKeyCredential(azureApiKey)
        );
        
        
        const result = await aiclient.getChatCompletions(deploymentId, messages);
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