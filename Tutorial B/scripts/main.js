import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((event) => {
	const player = event.source;
  if (event.itemStack.typeId === "minecraft:compass") {
  	//open menu with compass
  	Menu1(player)
 } else{}
   if (event.itemStack.typeId === "minecraft:clock") {
   	  	//open menu with clock
  	Menu2(player)
 } else{}
 })
function Menu1(player) {
const form = new ActionFormData()
form.title("test")//this a custom menu
form.button("")
form.button("")
form.button("")
form.button("")
form.button("")
form.button("")
form.button("")
form.show(player).then((r) => {
	if (r.canceled) return;
	// if player canceled 
	//add here command like player.runCommand("say hello world") or not :) 
	const response = r.selection;
  switch (response) {
          case 0:// 0 here = button 0 in main.js || "collection_index": 0,
          player.runCommand("camera @p set minecraft:first_person")
          // Put this to call back menu
           	Menu1(player)
          break;
          case 1:
          player.runCommand("camera @p set minecraft:third_person")
           	Menu1(player)
          break;
          case 2:
          player.runCommand("camera @p set minecraft:third_person_front")
           	Menu1(player)
          break;
          case 3:
          player.runCommand("summon lightning_bolt ^ ^ ^6")
           	Menu1(player)
          break;          
          case 4:
          player.runCommand("tp @e[type=!player,r=8] ^ ^3 ^6")
           	Menu1(player)
          break;                    
          case 5:
          player.runCommand("gamemode s")
           	Menu1(player)
          break;          
          case 6:
          player.runCommand("gamemode c")
           	Menu1(player)
          break;                              
          default:
  }
})}
function Menu2(player) {
const form = new ActionFormData()
form.title("Nothing")
form.button("you can edit this addon")
form.button("link in description")
form.button("!!!!!!")
form.show(player).then((r) => {
	if (r.canceled) return;
	const response = r.selection;
  switch (response) {
          case 0:
          player.runCommand("camera @p set minecraft:first_person")
          break;
          case 1:
          player.runCommand("camera @p set minecraft:third_person")
          break;
          case 2:
          player.runCommand("camera @p set minecraft:third_person_front")
          break;
          default:
  }
})}
