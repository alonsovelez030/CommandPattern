import { CommandManager } from './manager';
const newCommand = new CommandManager();
newCommand.getCommand('sum').execute(10,20,30,40);
newCommand.getCommand('substraction').execute(10,20);
newCommand.getCommand('division').execute(10,20,30);