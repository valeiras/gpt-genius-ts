"use client";
import { generateChatResponse } from "@/app/utils/action";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import type OpenAI from "openai";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";

const Chat: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<OpenAI.Chat.Completions.ChatCompletionMessageParam[]>([]);
  const { mutate: createMessage, isPending } = useMutation<
    OpenAI.Chat.Completions.ChatCompletionMessage | null,
    Error,
    OpenAI.Chat.Completions.ChatCompletionUserMessageParam
  >({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const query: OpenAI.Chat.Completions.ChatCompletionUserMessageParam = { role: "user", content: text };
    createMessage(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        {messages.map(({ role, content }) => {
          if (!content) return null;

          const avatar = role == "user" ? "👤" : "🤖";
          const bcg = role == "user" ? "bg-base-200" : "bg-base-100";
          return (
            <div
              key={nanoid()}
              className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
            >
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl">{content as string}</p>
            </div>
          );
        })}
        {isPending ? <span className="loading"></span> : null}
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="btn btn-primary join-item" type="submit" disabled={isPending}>
            {isPending ? "please wait" : "ask question"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
