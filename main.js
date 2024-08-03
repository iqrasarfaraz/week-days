#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta.bold("*************        Welcome to switch case     *************"));
let addName = await inquirer.prompt([{
        name: "Days",
        type: "list",
        message: (chalk.yellowBright("Select Your Day of The Week")),
        choices: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Exittsc"]
    }]);
switch (addName.Days) {
    case "Monday":
        console.log(chalk.redBright("\n\tStart Of The WorkWeek.Time to be Productive!\n\t"));
        break;
    case "Tuesday":
        console.log(chalk.redBright("\n\tSecond Day Of The WorkWeek.keep the momentum going!\n\t"));
        break;
    case "Wednesday":
        console.log(chalk.blueBright("\n\tMidWeek.Almost there!\n\t"));
        break;
    case "Thursday":
        console.log(chalk.blueBright("\n\tIt's a Thursday.The Weekend is in sight!\n\t"));
        break;
    case "Friday":
        console.log(chalk.greenBright("\n\tLast Working Day.Finish Strong!\n\t"));
        break;
    case "Saturday":
        console.log(chalk.greenBright("\n\tEnjoy.Your Weekend!\n\t"));
        break;
    case "Sunday":
        console.log(chalk.whiteBright("\n\tIt's Sunday.class in governer house!\n\t"));
        break;
}
console.log(addName);
