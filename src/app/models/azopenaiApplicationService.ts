import { AzOpenaiRepository } from './azopenaiRepository';

export const getAzOpenAIData = async (message: string,  userId: string,) => {
  try {
    const repo = new AzOpenaiRepository();
    return await repo.getAzOpenAIData(message,userId);
  } catch (err) {
    console.log("AZopenai Application err")
    return err;
  }
};