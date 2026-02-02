"use client";

import React from "react";

import { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { Divider } from "antd";
import type { Pages } from "../App";
import { FaGithub, FaGoogle } from "react-icons/fa";

type RegisterFormProps = {
  changePage?: (page: Pages) => void;
};

export function RegisterForm({ changePage }: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("[v0] Register submitted:", { email, password, name });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex min-h-full min-w-full flex-col items-center justify-center px-6 py-12 lg:px-12 xl:px-20">
      <div className="w-full max-w-sm mx-auto lg:mx-0">
        <div className="mb-8 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-lg font-bold text-background">G</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              Gabriel
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            Crie sua conta
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Crie uma conta para acessar o sistema
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="text"
              className="text-sm font-medium text-foreground"
            >
              Nome
            </label>
            <Input
              id="email"
              alt="Nome input"
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              E-mail
            </label>
            <Input
              id="email"
              alt="Email input"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Senha
            </label>
            <div className="relative">
              <Input.Password
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 bg-secondary border-border text-foreground placeholder:text-muted-foreground pr-10 focus:border-ring focus:ring-ring"
                required
              />
            </div>
          </div>

          <Button
            type="default"
            htmlType="submit"
            disabled={!email || !password || !name}
            loading={loading}
            className="w-full h-11 bg-foreground text-background hover:bg-foreground/90 font-medium rounded-md"
          >
            Criar conta
          </Button>
        </form>

        <Divider
          classNames={{
            content: "font-light text-[#94a3b8]",
            rail: "bg-[#94a3b877]",
          }}
        >
          Ou continue com
        </Divider>

        <div className="grid grid-cols-2 gap-3">
          <Button
            type="default"
            className="h-11 border-border bg-secondary hover:bg-secondary/80 text-foreground"
          >
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button
            type="default"
            className="h-11 border-border bg-secondary hover:bg-secondary/80 text-foreground"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Ja tem uma conta?{" "}
          <button
            onClick={() => changePage?.("login")}
            className="font-medium text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
          >
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
}
