import avatarImg from "../assets/placeholder.jpg";
import useAuth from "../hooks/useAuth";
function Blog() {
  const { user } = useAuth();
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="container mx-auto relative flex flex-col max-w-4xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
      <div>
        <div className="p-3 space-y-1">
          <h3 className="text-3xl font-semibold">
            1. What is an Access Token and Refresh Token?
          </h3>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold">Access Token:</span> An access token is
            a credential that allows the client to access specific resources or
            endpoints. It usually has a short lifespan and contains user
            permissions and authentication details.
          </p>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold"> Refresh Token:</span> The refresh token
            is used to obtain a new access token once the old one expires. This
            token typically has a longer lifespan and is stored securely to
            maintain continuous access without re-authentication.
          </p>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold">Working Mechanism:</span> When a user
            logs in, they receive both tokens. The access token grants access,
            while the refresh token requests new access tokens when needed.
          </p>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold">Storage on Client Side:</span> Store
            access tokens in memory or short-lived storage (e.g., session
            storage) to minimize risk. Refresh tokens should be in more secure
            storage, like HTTP-only cookies, to prevent cross-site scripting
            (XSS) attacks.
          </p>
        </div>
        <div className="p-3 space-y-1">
          <h3 className="text-3xl font-semibold">
            2. What is Express.js?
          </h3>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold">Overview:</span> Express.js is a minimal and flexible Node.js framework that simplifies the development of server-side applications, including APIs. It’s known for its ease of use, middleware support, and large ecosystem of plugins.
          </p>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold">Use Cases:</span> Express is widely used for REST APIs, backend services, and full-stack applications. It handles routing, request handling, and middleware integration.
          </p>
        </div>
        <div className="p-3 space-y-1">
          <h3 className="text-3xl font-semibold">
            3. What is NestJS?
          </h3>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold">Overview: </span> NestJS is a TypeScript-based, progressive framework for building scalable, maintainable server-side applications. It leverages Express (or optionally Fastify) but adds a modular architecture inspired by Angular, with built-in dependency injection, controllers, and providers.
          </p>
          <p className="text-sm dark:text-gray-600">
            <span className="font-bold">Use Cases:</span> NestJS is ideal for larger applications that benefit from a structured, modular codebase, dependency injection, and tools for unit testing. It’s popular in enterprise applications where scalability and maintainability are priorities.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3">
        <img
          alt=""
          src={user ? user.photoURL : avatarImg}
          className="object-cover w-12 h-12 dark:bg-gray-500 rounded-full shadow"
        />
        <div className="space-y-1">
          <span className="text-xs">{currentDate}</span>
          <div className="flex flex-wrap gap-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              javascript
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Express.js
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              NestJS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
