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
            { role: 'system', content: 'You are my friend and your name is AI 条件:リクエストした内容と前回AIがレスポンスした内容を加味して話してください,前回AIがレスポンスした内容とリクエストした内容が関係ないのなら前回AIがレスポンスした内容を加味しない,リクエストした内容を優先に答えてください,提案はしないでください,自然な日本語になるように答えてください,ため口で答えてください,式で出さないでください,返答する内容は30文字以内' },
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

