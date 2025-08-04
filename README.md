# Google OAuth2 Authentication with Next.js, TypeScript, Material UI, and PostgreSQL

## Overview

This project demonstrates how to implement Google OAuth2 authentication in a Next.js 13 App Router application using TypeScript, Material UI for styling, and PostgreSQL for user and session storage via NextAuth.js and TypeORM.

## Assumptions

* **Node.js** v14 or higher installed
* **Next.js** 13+ with the App Router (\`src/app\` directory)
* **PostgreSQL** database is set up and accessible
* Basic familiarity with environment variables and command-line operations
* You have Google OAuth2 credentials (Client ID and Client Secret)

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a `.env.local` file** in the project root with the following variables:

   ```env
   # PostgreSQL connection string
   DATABASE_URL=postgresql://<DB_USER>:<DB_PASSWORD>@<DB_HOST>:<DB_PORT>/<DB_NAME>

   # NextAuth configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<a-random-secret-string>

   # Google OAuth2 credentials
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>
   ```

4. **Database setup**

   * Ensure your PostgreSQL server is running.
   * Run migrations (if using TypeORM migrations):

     ```bash
     npx typeorm migration:run
     ```
   * **Or** manually create the users table in your database:

     ```sql
     CREATE TABLE "user" (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       email TEXT UNIQUE NOT NULL,
       image TEXT,
       created_at TIMESTAMPTZ DEFAULT NOW(),
       updated_at TIMESTAMPTZ DEFAULT NOW()
     );
     ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## File Structure

* **`src/app/api/auth/[...nextauth]/route.ts`**: Configures NextAuth.js with the Google provider and PostgreSQL adapter.
* **`src/app/layout.tsx`**: Root layout that wraps all pages with the `SessionProvider` and Material UI theme.
* **`src/app/page.tsx`**: Protected home page that redirects unauthenticated users to the login page.
* **`src/app/login/page.tsx`**: Public login page featuring a Google Sign-In button.
* **`components/Providers.tsx`**: Combines `SessionProvider`, `ThemeProvider`, and the `NavBar` component.
* **`components/LoginButton.tsx`**: Material UI button that triggers NextAuth.js `signIn` with Google.
* **`components/LogoutButton.tsx`**: Material UI button that triggers `signOut` and redirects.
* **`components/NavBar.tsx`**: Top-level AppBar with title and user controls.
* **`components/NavContent.tsx`**: Switches between login and logout/avatar based on session state.
* **`hooks/useRequireAuth.ts`**: Custom hook that enforces client-side route protection.

## Approach

1. **NextAuth.js**: Leveraged NextAuth.js for handling the OAuth2 flow, sessions, and user persistence in PostgreSQL using the built-in adapter.
2. **Server-Side Protection**: Used `getServerSession` in server components (`layout.tsx`, `page.tsx`) to redirect unauthenticated users at request time.
3. **Client-Side Protection**: Created an `AuthGuard` and `useRequireAuth` hook for protecting UI components on the client side.
4. **Material UI**: Employed Material UI for theming and UI components to achieve a LinkedIn-like look-and-feel.
5. **Database Integration**: Configured TypeORM to connect to PostgreSQL, storing both user profiles and session data.

## License

This project is licensed under the MIT License. Feel free to use and modify as needed.
