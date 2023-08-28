import Character from '../character';
import Team from '../app';

test('Check error: This character already exists', () => {
  expect(() => {
    const team = new Team();
    const char1 = new Character('Elves', 'Daemon');
    const char2 = new Character('Tom', 'Daemon');

    team.add(char1);
    team.add(char2);
    team.add(char2);
  }).toThrow('This character already exists');
});

test('Test multiple character additions', () => {
  const team = new Team();
  const char1 = new Character('Elves', 'Daemon');
  const char2 = new Character('Tom', 'Daemon');
  const char3 = new Character('Piter', 'Daemon');

  team.addAll([char1, char2, char3]);

  expect(team.members.size).toBe(3);
});

test('Checking method toArray', () => {
  const team = new Team();
  const char1 = new Character('Elves', 'Daemon');
  const char2 = new Character('Tom', 'Daemon');
  const char3 = new Character('Piter', 'Daemon');

  team.addAll([char1, char2, char3]);

  expect(team.toArray()).toEqual([char1, char2, char3]);
});
