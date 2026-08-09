import Typography from "../Typography/Typography";
import "./PageHeader.scss";

interface PageHeaderProps {
  kicker: string;
  heading: string;
}

const PageHeader = ({ kicker, heading }: PageHeaderProps) => (
  <div className="page-header">
    <Typography variant="h3" className="page-header__kicker">
      {kicker}
    </Typography>
    <Typography variant="h1" className="page-header__heading">
      {heading}
    </Typography>
    <div className="page-header__divider" />
  </div>
);

export default PageHeader;
