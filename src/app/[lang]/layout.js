export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'kn' }];
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  return (
    <main lang={lang}>
      {children}
    </main>
  );
}
