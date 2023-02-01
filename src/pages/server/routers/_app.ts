/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from "../trpc";
import { exampleRouter } from "./example";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
