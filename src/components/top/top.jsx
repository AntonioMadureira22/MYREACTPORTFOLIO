import "./top.scss"
import { Code, Email, GitHub } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    clickableIcon: {
        color: "green",
        "&hover": {
            color: "yellow",
        },
    },
}));

export default function Top({ menuOpen, setMenuOpen }) {
    const classes = useStyles();
    return (
        <div className={"top " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">apex</a>
                    <div className="itemContainer">
                        <Code onClick={event => window.open.href = 'https://github.com/AntonioMadureira22'}
                            className={classes.clickableIcon} className="icon" />
                        <span>+1 203 605 0316</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>antonio.madureira2222@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <span>AntonioMadureira22</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span>className="line1"</span>
                        <span>className="line2"</span>
                        <span>className="line3"</span>
                    </div>
                </div>
            </div>
        </div>
    );
}