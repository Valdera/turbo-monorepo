export interface DataThemeScriptProps
  extends React.ComponentPropsWithoutRef<'script'> {
  defaultTheme: string;
  localStorageKey: string;
  nonce: string;
}

const getScript = ({
  defaultTheme,
  localStorageKey,
}: {
  defaultTheme: string;
  localStorageKey: string;
}): string => {
  return `
  let _computedTheme = window.localStorage.getItem("${localStorageKey}");
  if (_computedTheme === null || _computedTheme === undefined) {
    _computedTheme = "${defaultTheme}";
  }
  document.documentElement.setAttribute("data-theme", _computedTheme.replaceAll('"', ""));`;
};

const DataThemeScript: React.FC<DataThemeScriptProps> = ({
  defaultTheme,
  localStorageKey,
  nonce,
  ...others
}) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: getScript({
          defaultTheme,
          localStorageKey,
        }),
      }}
      nonce={nonce}
      {...others}
    />
  );
};

export default DataThemeScript;
