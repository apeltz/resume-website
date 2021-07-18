import { Divider, Typography } from "@material-ui/core";

export const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <>
    <Typography variant="h3" style={{ marginTop: 30 }}>
      {text}
    </Typography>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
  </>
);
