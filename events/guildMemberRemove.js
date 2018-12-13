module.exports = member => {
  let guild = member.guild;
  member.send('Seni Özleyeceğiz!');
  guild.sohbet-odası.send(``);
};
