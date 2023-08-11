import { JOURNAL, JournalTable } from "./journal.mjs"


interface FrequencyEntry {
    n00: number,
    n01: number,
    n10: number,
    n11: number
}

const Events: string[] = [];
const Frequencies = new Map<string, FrequencyEntry>();

function updateFrequencies(event: string, journal: JournalTable) {
    if (Frequencies.has(event)) throw new RangeError(`updateFrequencies called twice for same event (${event})`);

    // Add event to Frequencies table
    const entry: FrequencyEntry = {n00: 0, n01: 0, n10: 0, n11: 0};
    Frequencies.set(event, entry);

    // For each entry in Journal update the FrequencyEntry counts
    for( let journalEntry of journal ) {
        let squirrel: boolean = journalEntry.squirrel;
        let includesEvent: boolean = journalEntry.events.includes(event);

        entry.n00 += (!squirrel && !includesEvent) ? 1 : 0;
        entry.n01 += (!squirrel && includesEvent) ? 1 : 0;
        entry.n10 += (squirrel && !includesEvent) ? 1 : 0;
        entry.n11 += (squirrel && includesEvent) ? 1 : 0;
    }
}

function findEvents(journal: JournalTable) {
    for( let entry of journal ) {
        for( let event of entry.events) {
            if(! Events.includes(event)) {
                Events.push(event);
            }
        }
        if (entry.events.includes('peanuts') && !entry.events.includes('brushed teeth')) {
            entry.events.push('peanut teeth');
        }
    }
    Events.push('peanut teeth');
}

function phi(table: FrequencyEntry) {
    const calculated = (table.n11 * table.n00 - table.n10 * table.n01) /
                       Math.sqrt( (table.n10 + table.n11) *
                                  (table.n01 + table.n00) *
                                  (table.n01 + table.n11) *
                                  (table.n00 + table.n10));
    return calculated;
}

/** Main **/

// 1. Iterate over JOURNAL and store all event strings in Events
findEvents(JOURNAL);

// 2. For each event in Events iterate JOURNAL and update Frequencies
for( let event of Events ) {
    updateFrequencies(event, JOURNAL);
}

// 2. Iterate over frequency table and calculate phi for each event
for( let event of Frequencies.keys() ) {
    let frequencyEntry: FrequencyEntry = Frequencies.get( event )!;
    let correlation = phi( frequencyEntry );

    if (correlation > 0.1 || correlation < -0.1) {
        console.log(`${(event + ' '.repeat(50)).slice(0, 50)}: ${correlation}`);
    }
}