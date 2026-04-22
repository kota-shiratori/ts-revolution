import { serve } from "@hono/node-server";
import { log } from "console";
import { Hono } from "hono";

const todos = [
  {
    id: 1,
    title: "Todo1",
    content: "Todo1です",
    completed: false,
  },
  {
    id: 2,
    title: "Todo2",
    content: "Todo2です",
    completed: false,
  },
  {
    id: 3,
    title: "Todo3",
    content: "Todo3です",
    completed: false,
  },
];

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/todos", (c) => {
  return c.json({
    todos,
  });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
