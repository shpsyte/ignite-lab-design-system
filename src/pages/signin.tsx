import { useCallback, useState } from "react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/Input";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent } from "react";

export function Sigin() {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    setIsSignIn(true);
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-gray-600 flex flex-col items-center justify-center text-gray-100">
        <header className="flex flex-col items-center">
          <Logo />

          <Heading size="lg" className="mt-4">
            Ignite Lab
          </Heading>

          <Text size="md" className="text-gray-400 mt-1">
            Faça login e começe a usar
          </Text>
        </header>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
        >
          {isSignIn && (
            <Text size="sm" className="text-gray-400">
              Login realizado!
            </Text>
          )}
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text size="sm" className="font-semibold">
              Endereço de email
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input
                id="email"
                type="email"
                placeholder="digite seu email"
              />
            </TextInput.Root>
          </label>
          <label htmlFor="password" className="flex flex-col gap-3">
            <Text size="sm" className="font-semibold">
              Endereço de password
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                id="password"
                type="password"
                placeholder="*******"
              />
            </TextInput.Root>
          </label>
          <label htmlFor="remember" className="flex items-center gap-2">
            <CheckBox id="remember" />
            <Text size="sm" className="text-gray-200 hover:cursor-pointer">
              Lembrar de mim
            </Text>
          </label>

          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
            Enviar
          </Button>
        </form>

        <footer className="flex flex-col itemns-center gap-4 mt-8">
          <Text size="sm" className="text-gray-400 underline" asChild>
            <a
              href="#"
              className="text-gray-400 no-underline hover:underline hover:text-gray-200"
            >
              Esqueci minha senha
            </a>
          </Text>
          <Text size="sm" className="text-gray-400 underline" asChild>
            <a
              href="#"
              className="text-gray-400 no-underline  hover:underline hover:text-gray-200"
            >
              Criar conta
            </a>
          </Text>
        </footer>
      </div>
    </>
  );
}
