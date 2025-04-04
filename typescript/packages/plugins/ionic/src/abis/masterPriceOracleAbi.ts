export const masterPriceOracleAbi = [
    {
        type: "function",
        inputs: [
            { name: "underlyings", internalType: "address[]", type: "address[]" },
            { name: "_oracles", internalType: "contract BasePriceOracle[]", type: "address[]" },
        ],
        name: "add",
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        inputs: [
            { name: "underlyings", internalType: "address[]", type: "address[]" },
            { name: "_oracles", internalType: "contract BasePriceOracle[]", type: "address[]" },
        ],
        name: "addFallbacks",
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        inputs: [],
        name: "admin",
        outputs: [{ name: "", internalType: "address", type: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        inputs: [],
        name: "canAdminOverwrite",
        outputs: [{ name: "", internalType: "bool", type: "bool" }],
        stateMutability: "view",
    },
    {
        type: "function",
        inputs: [{ name: "newAdmin", internalType: "address", type: "address" }],
        name: "changeAdmin",
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        inputs: [],
        name: "defaultOracle",
        outputs: [{ name: "", internalType: "contract BasePriceOracle", type: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        inputs: [{ name: "", internalType: "address", type: "address" }],
        name: "fallbackOracles",
        outputs: [{ name: "", internalType: "contract BasePriceOracle", type: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        inputs: [{ name: "cToken", internalType: "contract ICErc20", type: "address" }],
        name: "getUnderlyingPrice",
        outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        inputs: [
            { name: "underlyings", internalType: "address[]", type: "address[]" },
            { name: "_oracles", internalType: "contract BasePriceOracle[]", type: "address[]" },
            { name: "_defaultOracle", internalType: "contract BasePriceOracle", type: "address" },
            { name: "_admin", internalType: "address", type: "address" },
            { name: "_canAdminOverwrite", internalType: "bool", type: "bool" },
            { name: "_wtoken", internalType: "address", type: "address" },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        inputs: [{ name: "", internalType: "address", type: "address" }],
        name: "oracles",
        outputs: [{ name: "", internalType: "contract BasePriceOracle", type: "address" }],
        stateMutability: "view",
    },
    {
        type: "function",
        inputs: [{ name: "underlying", internalType: "address", type: "address" }],
        name: "price",
        outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
        stateMutability: "view",
    },
    {
        type: "function",
        inputs: [{ name: "newOracle", internalType: "contract BasePriceOracle", type: "address" }],
        name: "setDefaultOracle",
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        inputs: [],
        name: "wtoken",
        outputs: [{ name: "", internalType: "address", type: "address" }],
        stateMutability: "view",
    },
    {
        type: "event",
        anonymous: false,
        inputs: [{ name: "version", internalType: "uint8", type: "uint8", indexed: false }],
        name: "Initialized",
    },
    {
        type: "event",
        anonymous: false,
        inputs: [
            { name: "oldAdmin", internalType: "address", type: "address", indexed: false },
            { name: "newAdmin", internalType: "address", type: "address", indexed: false },
        ],
        name: "NewAdmin",
    },
    {
        type: "event",
        anonymous: false,
        inputs: [
            { name: "oldOracle", internalType: "address", type: "address", indexed: false },
            { name: "newOracle", internalType: "address", type: "address", indexed: false },
        ],
        name: "NewDefaultOracle",
    },
    {
        type: "event",
        anonymous: false,
        inputs: [
            { name: "underlying", internalType: "address", type: "address", indexed: false },
            { name: "oldOracle", internalType: "address", type: "address", indexed: false },
            { name: "newOracle", internalType: "address", type: "address", indexed: false },
        ],
        name: "NewOracle",
    },
] as const;
