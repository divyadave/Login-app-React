import Navigation from "./Navigation";
import classes from './MainHeader.module.css';

function MainHeader(props) {
    return (
        <div>
            <header className={classes['main-header']}>
                <h1>A Typical Page</h1>
                <Navigation></Navigation>
            </header>
        </div>
    )

}
export default MainHeader;