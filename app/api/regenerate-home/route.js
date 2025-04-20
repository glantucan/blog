import { revalidatePath } from 'next/cache';

export async function GET(request, response) {
  try {
    // Revalidate the / route
    await revalidatePath('/home');

    return new Response('Home page revalidated successfully', { status: 200 });
  } catch (error) {
    console.error('Error revalidating home page:', error);
    return new Response('Error revalidating home page', { status: 500 });
  }
}
