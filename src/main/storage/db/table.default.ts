import { Table } from "./table.enum";

export const TableDefault: { [key in Table]: [] } = {
    [Table.ACCOUNT]: [],
    [Table.CLIP]: [],
    [Table.PLAYLIST]: [],
    [Table.PLAYLIST_CLIP]: [],
};
