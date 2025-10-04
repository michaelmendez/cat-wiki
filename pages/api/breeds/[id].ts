import type { NextApiRequest, NextApiResponse } from 'next';
import catWikiDB from '@/lib/db/catWikiDb';
import type { ErrorResponse } from '@/types/common';

interface Data {
  wasUpdated: number;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  try {
    const { id } = req.query;
    const db = await catWikiDB();

    const breed = await db
      .collection('breeds')
      .updateOne({ id }, { $inc: { searchCount: 1 } }, { upsert: true });

    res.status(200).json({ wasUpdated: breed?.modifiedCount });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    res.status(500).json({ message: errorMessage });
  }
}
