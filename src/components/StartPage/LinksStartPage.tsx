import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { type ILinkText } from "~/models/ILinkText";

interface Props {
  cardItem: ILinkText;
}

export const LinksStartPage = ({ cardItem }: Props) => {
  return (
    <>
      <CardContent>
        <Typography variant="h5" component="div">
          {cardItem.title}
        </Typography>
        <Typography variant="body1">{cardItem.body}</Typography>
      </CardContent>
      <CardActions>
        <Button color="inherit" href={cardItem.link}>
          {cardItem.linkText}
        </Button>
      </CardActions>
    </>
  );
};
