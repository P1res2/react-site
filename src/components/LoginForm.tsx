"use client";

import React from "react";

import { useState } from "react";
import { Button } from "antd";
import { Checkbox } from "antd";
import { Input } from "antd";
import type { CheckboxProps } from "antd";
import { Divider } from "antd";
import type { Pages } from "../App";
import { FaGithub, FaGoogle } from "react-icons/fa";

type LoginFormProps = {
  changePage?: (page: Pages) => void;
};

export function LoginForm({ changePage }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCheckedChange: CheckboxProps["onChange"] = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("[v0] Login submitted:", { email, rememberMe });
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
            Bem-vindo de volta
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre com suas credenciais para acessar sua conta
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onChange={onCheckedChange}
                className="border-border data-[state=checked]:bg-foreground data-[state=checked]:text-background"
              >
                Lembrar de mim
              </Checkbox>
            </div>
            <button
              onClick={() => changePage?.("register")}
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
            >
              Esqueceu a senha?
            </button>
          </div>

          <Button
            type="default"
            htmlType="submit"
            disabled={!email || !password}
            loading={loading}
            className="w-full h-11 bg-foreground text-background hover:bg-foreground/90 font-medium rounded-md"
          >
            Entrar
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
          Não tem uma conta?{" "}
          <button
            onClick={() => changePage?.("register")}
            className="font-medium text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
          >
            Criar conta
          </button>
        </p>
      </div>
    </div>
  );
}
