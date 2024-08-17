const syncDB = require("../../tasks/sync-db");

describe('Pruebas en SyncDB', () => {
  test('Debe de ejecutar el proceso 2 veces', async () => {
    syncDB();
    const times = syncDB();
    expect(times).toBe(2);
  });
});
