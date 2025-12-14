`username.github.io/hoge/`をルートディレクトリとしている場合、

`/hoge/fuga`にアクセスすると、

`/hoge/fuga/index.html`を探そうとして404エラーになります。

# 解決方法

## /public/404.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Redirecting...</title>
  <script>
    const path = window.location.pathname + window.location.search + window.location.hash;
    sessionStorage.setItem('redirect', path);
    window.location.replace('/');
  </script>
</head>
<body></body>
</html>
```

## /App.tsx

```tsx
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return(
    <BrowserRouter>
    <RedirectHandler />
        {/* <Route>など */}
    </BrowserRouter>
  );
}

export default App;
```

`npm run build`等でビルドし、githubにpushします。

# おわりに

これの解決に数時間かけてかなりしんどかったです。