const btnMenu = document.getElementById("btnMenu");
const list = document.querySelector("#categoryList > ul");
const brandlist = document.querySelector("#brandlist");
const brandTemplate = document.querySelector("#brandTemplate");

console.log("asdsad");
let isActive = false;

const data = {
  count: 8,
  rows: [
    {
      id: "2499807d-2507-453a-ac4c-4bc0635205dd",
      name: "Macbook",
      uri: "laptop",
      brands: [
        {
          id: "d612028c-be5a-42f7-aeec-c960a1ebb119",
          name: "MACBOOK",
          uri: "mac",
          subCategories: [
            {
              id: "8c6823cd-2fb1-4a71-a381-b65467055ac9",
              name: "Macbook Pro 2023",
              uri: "macbook-pro-2023",
            },
            {
              id: "d14d17d7-4260-4229-8887-7ddb8813d223",
              name: "Macbook Pro 2022",
              uri: "macbook-pro-2022",
            },
            {
              id: "2f71fbdb-3417-4124-a30d-d06a58329f19",
              name: "Macbook Pro 2021",
              uri: "macbook-pro-2021",
            },
            {
              id: "0654add1-8cd4-42b9-acb2-04a1c6ffe0bc",
              name: "Macbook Pro 2020",
              uri: "macbook-pro-2020",
            },
            {
              id: "794dfde5-1d97-4412-9749-3cda9c772141",
              name: "Macbook Pro Series",
              uri: "macbook-pro-series",
            },
            {
              id: "c21f0cf7-4886-4fe7-a32f-285733bb6551",
              name: "Macbook Air 2022",
              uri: "macbook-air-2022",
            },
            {
              id: "386ed473-1e45-4fd1-946f-c6447e0f6513",
              name: "Macbook Air 2020",
              uri: "macbook-air-2020",
            },
            {
              id: "d92941fa-944b-4c86-aa56-c648b96ff67c",
              name: "Macbook Air Series",
              uri: "macbook-air-series",
            },
            {
              id: "a28840bc-f779-4385-ae11-6985dc2d8e94",
              name: "Mac mini 2023",
              uri: "mac-mini-2023",
            },
            {
              id: "7be14e4a-b1e2-41d4-8a94-89bef7b8d1bd",
              name: "iMac 2021",
              uri: "imac-2021",
            },
          ],
        },
      ],
    },
    {
      id: "a765472f-414e-4e24-bf50-607ae23433dc",
      name: "Máy tính bảng",
      uri: "may-tinh-bang",
      brands: [
        {
          id: "442a277f-4918-4e21-84d3-1670d97a4750",
          name: "IPAD PRO",
          uri: "ipad-pro",
          subCategories: [
            {
              id: "1ee88114-bfe4-4b97-94c4-4849e3342436",
              name: "iPad Pro M2 12.9 inch (2022)",
              uri: "ipad-pro-129-inch-2022",
            },
            {
              id: "72936650-76dd-4c50-9b8b-4286ff0ec07b",
              name: "iPad Pro M1 12.9 inch",
              uri: "ipad-pro-129-inch-2021",
            },
            {
              id: "1d50f60c-c308-4905-af82-756714e12063",
              name: "iPad Pro M2 11 inch (2022)",
              uri: "ipad-pro-11-inch-2022",
            },
            {
              id: "7e612931-ec5b-45bf-b3b6-96be82e5c932",
              name: "iPad Pro M1 11 inch",
              uri: "ipad-pro-11-inch-2021",
            },
            {
              id: "99f4f82b-cf8b-432a-acc3-26fbd9e9c301",
              name: "iPad Pro 2017-2020",
              uri: "ipad-pro",
            },
          ],
        },
        {
          id: "6298cf81-552c-4215-86ef-08a5f87d5a0c",
          name: "IPAD GEN",
          uri: "ipad-gen",
          subCategories: [
            {
              id: "90eadfff-8b17-4565-8b51-a28610a31258",
              name: "iPad Gen 10 (2022)",
              uri: "ipad-gen-10",
            },
            {
              id: "db65179d-690d-4010-96c5-971c1738c5a2",
              name: "iPad Gen 9",
              uri: "ipad-gen-9",
            },
            {
              id: "0530a267-54d1-4d14-812c-bb72caeb740f",
              name: "iPad Gen 6 | Gen 7 | Gen 8",
              uri: "ipad-gen-7-8",
            },
          ],
        },
        {
          id: "cac6425b-b534-4d88-87da-efa9d9f345af",
          name: "IPAD AIR",
          uri: "ipad-air",
          subCategories: [
            {
              id: "4d00c237-485f-448a-817e-766c95f54d3d",
              name: "iPad Air 5",
              uri: "ipad-air-5",
            },
            {
              id: "66a05d61-2260-4e86-ae16-48e3ce878602",
              name: "iPad Air 3 | 4",
              uri: "ipad-air",
            },
          ],
        },
        {
          id: "4d49d8d3-77cd-4b78-8a64-92bdefecfd12",
          name: "IPAD MINI",
          uri: "ipad-mini",
          subCategories: [
            {
              id: "e7dd6076-d04e-4f62-a12f-70b3fd591c92",
              name: "iPad Mini 6",
              uri: "ipad-mini-6",
            },
            {
              id: "afbc8d1b-9cfb-4654-a21a-c880efd9c69d",
              name: "iPad Mini 4 | Mini 5",
              uri: "ipad-mini-4-5",
            },
          ],
        },
        {
          id: "10535c07-2180-4919-b8ae-7eed10298ab1",
          name: "SAMSUNG GALAXY TAB",
          uri: "samsung-galaxy-tab",
          subCategories: [
            {
              id: "b2b7c879-f442-41e7-a0b1-415c7757da91",
              name: "Galaxy Tab A Series",
              uri: "series-a",
            },
            {
              id: "f81c8adf-a284-48e3-899c-88802dc0c02e",
              name: "Galaxy Tab S Series",
              uri: "series-s",
            },
          ],
        },
      ],
    },
    {
      id: "fbb9db23-8244-49e5-b541-a32030532eeb",
      name: "Điện thoại",
      uri: "dien-thoai",
      brands: [
        {
          id: "95a4fb39-77ac-4011-9e9e-7af657d95cf7",
          name: "APPLE IPHONE",
          uri: "apple-iphone",
          subCategories: [
            {
              id: "610f32ce-e2f1-4daa-9061-8df5fee35314",
              name: "iPhone 14 Series",
              uri: "iphone-14-series",
            },
            {
              id: "0098c2b9-943f-462e-8110-b55471dbb155",
              name: "iPhone 13 Series",
              uri: "iphone-13-series",
            },
            {
              id: "154cf57e-c0b4-4a07-a3ee-432eda0fc48b",
              name: "iPhone 12 Series",
              uri: "iphone-12-series",
            },
            {
              id: "dc257481-daee-4946-92be-5629d6bf8500",
              name: "iPhone 11 Series",
              uri: "iphone-11-series",
            },
            {
              id: "d2665eb1-e782-4b7f-aa55-35251e150cb0",
              name: "iPhone X Series",
              uri: "iphone-x-series",
            },
            {
              id: "bb8dc725-e4d0-400c-982c-eca37db41abb",
              name: "iPhone SE (2022)",
              uri: "iphone-se-2022",
            },
            {
              id: "d42fb70f-0814-4039-976c-14f4303750f7",
              name: "iPhone 8 | 8 Plus | SE 2020",
              uri: "iphone-8-or-se-2020",
            },
          ],
        },
        {
          id: "dddc83ea-5c00-4c16-a95a-977a423212b7",
          name: "SAMSUNG",
          uri: "samsung",
          subCategories: [
            {
              id: "d9f04e54-0deb-4c81-8881-887899a36d3f",
              name: "Samsung Galaxy Z",
              uri: "galaxy-z",
            },
            {
              id: "7ecb6f0a-ae71-4681-bde0-26393462e93c",
              name: "Samsung Galaxy S",
              uri: "galaxy-s",
            },
            {
              id: "a928cd43-a615-48c0-9a56-5682be549c9c",
              name: "Samsung Galaxy A",
              uri: "galaxy-a",
            },
          ],
        },
        {
          id: "90bd17f5-8a21-4def-ae08-08bc5cf9ef96",
          name: "XIAOMI",
          uri: "xiaomi",
          subCategories: [
            {
              id: "fd1f46fb-5236-4303-9422-d6d75148ad8c",
              name: "Xiaomi Mi",
              uri: "xiaomi-mi",
            },
            {
              id: "275941b2-c7ec-42d6-81cc-c2cbe809ab5c",
              name: "Xiaomi Redmi",
              uri: "xiaomi-redmi",
            },
          ],
        },
        {
          id: "6eaec548-90df-4225-80d5-83019afd7edb",
          name: "OPPO",
          uri: "oppo",
          subCategories: [
            {
              id: "33020b31-c642-4842-8746-08eca01e260d",
              name: "Oppo Reno",
              uri: "oppo-reno",
            },
            {
              id: "9505bd9d-52cc-4d4e-a678-cd0351a2d4c9",
              name: "Oppo A",
              uri: "oppo-a",
            },
          ],
        },
        {
          id: "fac817ce-354e-4c7f-b88f-955b717c9b69",
          name: "GOOGLE PIXEL",
          uri: "google",
          subCategories: [
            {
              id: "3b56668c-31b7-40aa-8c25-e857e385c7ff",
              name: "Google Pixel 7",
              uri: "pixel-7",
            },
            {
              id: "61a6ced4-4e29-43f4-8894-73eeb364f7c3",
              name: "Google Pixel 6",
              uri: "pixel-6",
            },
          ],
        },
      ],
    },
    {
      id: "ae170bd0-7bde-41bf-8bb7-035ec99943fa",
      name: "Âm thanh",
      uri: "am-thanh",
      brands: [
        {
          id: "b3a29db5-8cf8-476c-8214-9f300fd8115c",
          name: "TAI NGHE",
          uri: "tai-nghe",
          subCategories: [
            {
              id: "6285e743-7442-4bfb-a017-51a8dedebb61",
              name: "Tai Nghe Apple - Airpods",
              uri: "airpods",
            },
            {
              id: "a8fa3e63-e0a8-4df3-b584-40f06bba8a99",
              name: "Tai Nghe Marshall",
              uri: "tai-nghe-marshall",
            },
            {
              id: "3a18069d-2b68-4297-a209-b6a7b9f8e4bf",
              name: "Tai Nghe Samsung",
              uri: "tai-nghe-samsung",
            },
            {
              id: "9efad5e1-0aab-43bc-890e-9d904988536b",
              name: "Tai Nghe Sony",
              uri: "tai-nghe-sony",
            },
            {
              id: "29f3a1fb-ca00-4563-8e10-2daa9b43aad7",
              name: "Tai Nghe SoundPeats",
              uri: "tai-nghe-soundpeats",
            },
            {
              id: "18303761-e790-4a99-972d-7480f0b5ce74",
              name: "Tai Nghe Bluetooth",
              uri: "tai-nghe-bluetooth",
            },
            {
              id: "7366be03-94e7-4cf1-b706-9b2df24da1be",
              name: "Tai Nghe Cắm Dây",
              uri: "tai-nghe-cam-day",
            },
            {
              id: "1275c05d-1a9a-42eb-98cc-8e781d5c23fa",
              name: "Nhét tai - In Ear",
              uri: "tai-nghe-in-ear",
            },
            {
              id: "379d977d-e43d-4f0f-a170-877016b3475e",
              name: "Chụp tai - On Ear",
              uri: "tai-nghe-chup-tai-over-ear",
            },
          ],
        },
        {
          id: "f1fef2a4-1262-4d51-8803-37dcca7a46bb",
          name: "LOA",
          uri: "loa",
          subCategories: [
            {
              id: "89e87991-d65e-467a-8b71-0f0c10cae645",
              name: "Loa Apple",
              uri: "homepod",
            },
            {
              id: "b1d02af1-9c8d-4541-9638-85848f0e1f27",
              name: "Loa Marshall",
              uri: "loa-marshall",
            },
            {
              id: "aca7795a-2883-4cab-b8bc-86846a291fb4",
              name: "Loa JBL",
              uri: "loa-jbl",
            },
            {
              id: "18894a15-513f-47f5-aede-130ec00c475c",
              name: "Loa Sony",
              uri: "loa-sony",
            },
            {
              id: "6ff35ad5-9fb9-4fd6-944d-2834b0952426",
              name: "Loa Di Động",
              uri: "loa-di-dong",
            },
            {
              id: "09adf4d0-b5d9-4cfa-9f58-0d9a138d247d",
              name: "Loa Cắm Dây",
              uri: "loa-cam-day",
            },
            {
              id: "cf1910f4-09a5-435d-b9fb-85867e60a5f5",
              name: "Loa Bluetooth",
              uri: "loa-bluetooth",
            },
          ],
        },
        {
          id: "b58807de-8a9c-4b7a-9c1d-2ee0dff13f76",
          name: "THƯƠNG HIỆU",
          uri: "thuong-hieu",
          subCategories: [
            {
              id: "959b6aa0-ac4c-4692-80ec-b05ca1f8a942",
              name: "Google",
              uri: "google",
            },
            {
              id: "2b3c30c7-1cca-4752-965e-f81e9395f6a3",
              name: "Apple",
              uri: "apple",
            },
            {
              id: "35552eb3-5645-4efd-90b1-63e10ac02627",
              name: "Marshall",
              uri: "marshall",
            },
            {
              id: "2b6bc722-d06a-4295-9ce0-d0931f5b22fc",
              name: "Samsung",
              uri: "samsung",
            },
            {
              id: "f46f26e1-2578-4fb4-9cf8-094e0d090d7d",
              name: "SoundPeats",
              uri: "soundpeats",
            },
            {
              id: "bf3413c2-8408-4b3d-870d-d16f2a6f79ea",
              name: "Sony",
              uri: "sony",
            },
            {
              id: "33251021-10b7-401d-b500-1bb338e70280",
              name: "Baseus",
              uri: "tai-nghe-baseus",
            },
            {
              id: "adab9fb5-cc8b-4bd0-8460-ac5c2a04de7a",
              name: "JBL",
              uri: "tai-nghe-jbl",
            },
            {
              id: "cb08ee17-6005-48fd-a4c3-60de3bd16d1d",
              name: "Harman Kardon",
              uri: "loa-harman-kardon",
            },
          ],
        },
      ],
    },
    {
      id: "5321c88f-22a4-43c0-bc3d-788db1da9e5e",
      name: "Đồng hồ",
      uri: "dong-ho",
      brands: [
        {
          id: "9ec021c9-40fb-4465-85e9-89194d9f10e0",
          name: "APPLE WATCH",
          uri: "apple-watch",
          subCategories: [
            {
              id: "aa7fee43-8f79-4775-b13f-e33f5626fb3f",
              name: "Apple Watch Ultra",
              uri: "ultra",
            },
            {
              id: "a385d5c1-5a27-4554-99a1-24cc6901c8aa",
              name: "Apple Watch Series 8",
              uri: "series-8",
            },
            {
              id: "29adc2b0-1fc6-4cf4-bb3b-697ebb43fc86",
              name: "Apple Watch SE 2022",
              uri: "se-2",
            },
            {
              id: "fc9cc7e5-b571-4480-a67a-c04021c8eb38",
              name: "Apple Watch Series 7",
              uri: "series-7",
            },
            {
              id: "2548fc26-b802-47a8-89c4-9d0b3ff40df9",
              name: "Apple Watch Series 6",
              uri: "series-6",
            },
            {
              id: "547dd0ef-ef23-47b5-942e-9e2b0b316dac",
              name: "Apple Watch SE",
              uri: "se",
            },
            {
              id: "77e1793b-5943-4314-a99d-b06030c01cc1",
              name: "Apple Watch Series 5",
              uri: "series-5",
            },
            {
              id: "8ee9d8e3-6646-41f3-9f57-5e77ff1e29d1",
              name: "Apple Watch Series 3 | 4",
              uri: "apple-watch-series-3-or-4-or-5",
            },
          ],
        },
        {
          id: "dadc62b5-28d4-4536-8f8e-7dcc9fd6f2ac",
          name: "SAMSUNG WATCH",
          uri: "samsung",
          subCategories: [
            {
              id: "b1ba8ea0-8186-466b-a900-98f110c6bdb5",
              name: "Samsung Galaxy Watch 5",
              uri: "galaxy-watch-5",
            },
            {
              id: "9ec361c5-fdfd-4a26-a483-a3a4b649a20e",
              name: "Samsung Galaxy Watch 4",
              uri: "galaxy-watch-4",
            },
          ],
        },
      ],
    },
    {
      id: "9a51a9ab-5f81-4176-bfc9-2f59fc43916d",
      name: "Phụ kiện",
      uri: "phu-kien",
      brands: [
        {
          id: "4c38d980-cdc2-499a-822b-97507276b142",
          name: "PHỤ KIỆN ĐIỆN THOẠI",
          uri: "phu-kien-dien-thoai",
          subCategories: [
            {
              id: "dee78b44-ef00-4548-a103-1af47a9e0a42",
              name: "Phụ Kiện 14 Series",
              uri: "14-series",
            },
            {
              id: "d84a455e-a26f-4af2-a5f5-8c641399eefc",
              name: "Phụ kiện 13 series",
              uri: "phu-kien-13-series",
            },
            {
              id: "c6e01638-93c7-414a-b8e1-e14dcd1d29ff",
              name: "Pin dự phòng",
              uri: "pin-sac-du-phong",
            },
            {
              id: "39a4aae9-2488-4f5e-9c26-b5efcc9ddc02",
              name: "Ốp lưng",
              uri: "op-lung-dien-thoai",
            },
            {
              id: "7f093cba-29d7-44ac-8935-e85f460c9b55",
              name: "Miếng dán màn hình",
              uri: "mieng-dan-dien-thoai",
            },
            {
              id: "4113c169-ad70-4091-9c58-ec9c45e10136",
              name: "Củ sạc - cáp sạc",
              uri: "cap-sac",
            },
          ],
        },
        {
          id: "97e3de79-da37-44a2-87b4-72ed5a62e062",
          name: "PHỤ KIỆN MACBOOK",
          uri: "phu-kien-macbook",
          subCategories: [
            {
              id: "5ad623a8-4906-4b70-bf7d-9955ceca17d1",
              name: "Balo - Túi chống sốc",
              uri: "balo-tui-chong-soc-macbook",
            },
            {
              id: "b50d1114-5f5c-445f-b4a6-24e3bd880b5c",
              name: "Miếng dán bảo vệ",
              uri: "mieng-dan-op-lung-macbook",
            },
            {
              id: "856047e9-02dc-4873-82c0-585fdb096307",
              name: "Cổng chuyển HUB",
              uri: "hub-cap-sac-macbook",
            },
          ],
        },
        {
          id: "09220972-90e1-4fc0-8d0b-952a0c5f9ce0",
          name: "THƯƠNG HIỆU",
          uri: "thuong-hieu",
          subCategories: [
            {
              id: "b4297b13-6c13-42de-9fa8-8eca5e033dc3",
              name: "Zeelot",
              uri: "zeelot",
            },
            {
              id: "8130cfac-6030-44f5-9c8c-64317c3b775b",
              name: "UNIQ",
              uri: "uniq",
            },
            {
              id: "c1d19688-226b-43b7-9d54-96fe9857c70c",
              name: "Apple",
              uri: "apple",
            },
            {
              id: "b88ece80-e232-42e5-a762-1dd701ea57c1",
              name: "Samsung",
              uri: "samsung",
            },
            {
              id: "38d4dc67-170d-4696-850e-fa1e3292f339",
              name: "Tomtoc",
              uri: "tomtoc",
            },
            {
              id: "646c4664-e857-4f08-8ff8-fcce447f724a",
              name: "Baseus",
              uri: "phu-kien-baseus",
            },
            {
              id: "bf7b802b-f184-4610-88ee-c1f62d15bd5f",
              name: "Innostyle",
              uri: "innostyle",
            },
            {
              id: "f70d4f2b-20cc-429f-b357-6466e706e9a3",
              name: "ESR",
              uri: "esr",
            },
            {
              id: "492fb870-cc4f-4046-8b4a-21f844646d16",
              name: "MOFT",
              uri: "phu-kien-moft",
            },
            {
              id: "50ac1822-5089-4763-a8d7-bfada1a9998b",
              name: "Mipow",
              uri: "mipow",
            },
            {
              id: "14386ec7-f04a-43b1-ba8e-d28554d8b9bb",
              name: "JCPAL",
              uri: "jcpal",
            },
          ],
        },
        {
          id: "6fdd9693-ff26-4361-8f9e-ef42ef6543d7",
          name: "PHỤ KIỆN MÁY TÍNH BẢNG",
          uri: "phu-kien-may-tinh-bang",
          subCategories: [
            {
              id: "10597fef-00f8-4e5a-be18-41a8fab41069",
              name: "Miếng dán màn hình",
              uri: "mieng-dan-ipad",
            },
            {
              id: "4ef6d1b7-5502-4222-959a-a3c139a908d4",
              name: "Bút cảm ứng",
              uri: "apple-pencil",
            },
            {
              id: "1a09d921-3992-4210-b640-6a35a709deea",
              name: "Bàn phím thông minh",
              uri: "smart-keyboard",
            },
            {
              id: "592a2d5f-ef7e-4f96-80f7-581efb80d637",
              name: "Bao da - ốp lưng",
              uri: "bao-da-op-lung",
            },
            {
              id: "691a3f1f-56e0-4bde-b113-ae4146c7b982",
              name: "Củ sạc - cáp sạc",
              uri: "cu-sac-cap-sac-macbook",
            },
          ],
        },
        {
          id: "c30b135c-606c-4b7b-8cbf-d2ab1efd76b8",
          name: "TIỆN ÍCH THÔNG MINH",
          uri: "tien-ich-thong-minh",
          subCategories: [
            {
              id: "1e033239-72ca-45d7-b3fe-83fd4a722963",
              name: "Tiện ích ô tô",
              uri: "tien-ich-o-to",
            },
          ],
        },
        {
          id: "c3e95892-9284-44a3-b9f7-0ad59c12ac24",
          name: "PHỤ KIỆN APPLE WATCH",
          uri: "phu-kien-apple-watch",
          subCategories: [],
        },
        {
          id: "aa08c921-fed8-4c93-bb2b-c0517b970a76",
          name: "PHỤ KIỆN AIRPODS",
          uri: "phu-kien-airpods",
          subCategories: [],
        },
        {
          id: "b9c24512-a218-4ccb-adcc-a2a52a4fd9ff",
          name: "PHỤ KIỆN KHÁC",
          uri: "phu-kien-khac",
          subCategories: [],
        },
      ],
    },
    {
      id: "7e78a0fa-6d6f-4e7c-9598-cd0ce34b5cf4",
      name: "Work Setup",
      uri: "work-setup",
      brands: [],
    },
    {
      id: "91b43ff6-b703-43bb-91db-52270abbd44f",
      name: "Cũ giá rẻ",
      uri: "dien-thoai-re",
      brands: [],
    },
  ],
};

function renderList(item) {
  for (let i = 0; i < data.rows.length; i++) {
    // Tao element li
    const a = document.createElement("a");
    const li = document.createElement("li");

    //cai su kien khi hover
    li.addEventListener("mouseenter", () => {
      //hover den item nao se hien thi index cua cai do
      renderItem(i);
    });

    a.textContent = data.rows[i].name;
    //chen a vao li
    li.appendChild(a);

    //Chen vao danh sach
    list.appendChild(li);
  }
}

function renderItem(index) {
  brandList.innerHTML = "";
  for (let i = 0; i < data.rows[index].brands.length; i++) {
    const cloneBrandTemp = brandTemplate.cloneNode(true);
    const brandTitle = cloneBrandTemp.content.querySelector(".brand-title");
    const brands = cloneBrandTemp.content.querySelector(".brand-list");
    brandTitle.textContent = data.rows[index].brands[i].name;
    if (data.rows[index].brands[i].subCategories) {
      for (
        let j = 0;
        j < data.rows[index].brands[i].subCategories.length;
        j++
      ) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = data.rows[index].brands[i].subCategories[j].name;

        li.appendChild(a);

        brands.appendChild(li);
      }
    }
    brandList.appendChild(cloneBrandTemp.content);
  }
}

function toggleMenu() {
  const categoryList = document.getElementById("categoryList");
  categoryList.classList.toggle("is-active");
  isActive = !isActive;
}

function main() {
  renderList();
  if (btnMenu) {
    btnMenu.addEventListener("click", toggleMenu);
  }
}

main();
