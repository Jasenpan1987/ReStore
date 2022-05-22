import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header({
  darkMode,
  handleToggleThemeMode,
}: {
  darkMode: boolean;
  handleToggleThemeMode: (mode: boolean) => void;
}) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">Re-Store</Typography>
        <Switch
          checked={darkMode}
          color="warning"
          onChange={() => {
            handleToggleThemeMode(!darkMode);
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
