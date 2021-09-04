import classes from "./CssModules.module.scss";

console.log(classes);

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
