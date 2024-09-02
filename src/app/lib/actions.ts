'use server';

import { z } from 'zod';
// import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';
import { neon } from '@neondatabase/serverless';

const FormSchema = z.object({
//   id: z.string(),
//   customerId: z.string({
//     invalid_type_error: 'Please select a customer.',
//   }),
//   amount: z.coerce
//     .number()
//     .gt(0, { message: 'Please enter an amount greater than $0.' }),
//   status: z.enum(['paid', 'pending'], {
//     invalid_type_error: 'Please select an invoice status.',
//   }),
//   date: z.string(),

  name: z.string(),
  description: z.string(),
  year: z.number(),
  image_url: z.string(),
  max_players: z.number(),
  max_play_time: z.number(),
  type: z.enum(['Strategy', 'Eurogames', 'Party', 'Cooperative', 'Deck-building', 'RPGs'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
});

// const CreateInvoice = FormSchema.omit({ id: true, date: true });
// const UpdateInvoice = FormSchema.omit({ date: true, id: true });
const AddGame = FormSchema;

export type State = {
  errors?: {
    // customerId?: string[];
    // amount?: string[];
    // status?: string[];
    name?: string[];
    description?: string[],
    year?: number[],
    image_url?: string[], 
    max_players?: number[], 
    max_play_time?: number[],
    type?: string[],
  };
  message?: string | null;
};

// export default async function Page() {
//   async function create(formData: FormData) {
//     "use server";
//     const sql = neon(process.env.DATABASE_URL);
//     await sql("INSERT INTO comments (comment) VALUES ($1)", [comment]);
//   }
//   return (
//     <form action={create}>
//       <input type="text" placeholder="write a comment" name="comment" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export async function addGame(prevState: State, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = AddGame.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
      year: formData.get('year'),
      image_url: formData.get('image_url'),
      max_players: formData.get('max_players'),
      max_play_time: formData.get('max_play_time'),
      type: formData.get('type'),
    });
      // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Add Game.',
    };
  }

  // Prepare data for insertion into the database
  const { name, description, year, image_url, max_players, max_play_time, type } = validatedFields.data;

  // Insert data into the database
  try {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`"INSERT INTO board_games (name, description, year, image_url, max_players, max_play_time, type) 
    VALUES (${name}, ${description}, ${year}, ${image_url}, ${max_players}, ${max_play_time}, ${type} )" []`;

  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Add Game.',
    };
}
}

// export async function createInvoice(prevState: State, formData: FormData) {
//   // Validate form fields using Zod
//   const validatedFields = CreateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });

//   // If form validation fails, return errors early. Otherwise, continue.
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Create Invoice.',
//     };
//   }

//   // Prepare data for insertion into the database
//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;
//   const date = new Date().toISOString().split('T')[0];

//   // Insert data into the database
//   try {
//     await sql`
//       INSERT INTO invoices (customer_id, amount, status, date)
//       VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//     `;
//   } catch (error) {
//     // If a database error occurs, return a more specific error.
//     return {
//       message: 'Database Error: Failed to Create Invoice.',
//     };
//   }

//   // Revalidate the cache for the invoices page and redirect the user.
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
// }

// export async function updateInvoice(
//   id: string,
//   prevState: State,
//   formData: FormData,
// ) {
//   const validatedFields = UpdateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Update Invoice.',
//     };
//   }

//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;

//   try {
//     await sql`
//       UPDATE invoices
//       SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//       WHERE id = ${id}
//     `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update Invoice.' };
//   }

//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
// }

// export async function deleteInvoice(id: string) {
//   // throw new Error('Failed to Delete Invoice');

//   try {
//     await sql`DELETE FROM invoices WHERE id = ${id}`;
//     revalidatePath('/dashboard/invoices');
//     return { message: 'Deleted Invoice' };
//   } catch (error) {
//     return { message: 'Database Error: Failed to Delete Invoice.' };
//   }
// }

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }