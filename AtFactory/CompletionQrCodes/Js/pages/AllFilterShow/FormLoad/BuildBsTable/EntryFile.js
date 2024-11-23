import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onClickRow = onClickRow;
    ForColumns({ inColumns: optionsJson.columns });
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;
    let LocalFactoryName = localStorage.getItem("FactoryName");
    optionsJson.url=`/Custom/Clients/Laundry/Factory/Outward/Scan/QrCode/${LocalFactoryName}`;
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };