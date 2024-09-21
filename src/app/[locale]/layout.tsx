import { ReactNode } from "react";

export const generateStaticParams = () => {
  return ["en"].map((locale: string) => ({ locale }));
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html lang={locale}>
      <head>
        <title>next-intl-bug-repro-app-router</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
