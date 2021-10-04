import DC2_0A from "../assets/productImages/DataCables/DC_2-0A.jpg";
import dc1_two from "../assets/productImages/DataCables/dc1/2.jpg";
import dc1_three from "../assets/productImages/DataCables/dc1/3.jpg";
import PTDC_202 from "../assets/productImages/DataCables/PTDC-202.jpg";
import dc2_two from "../assets/productImages/DataCables/dc2/2.jpg";
import dc2_three from "../assets/productImages/DataCables/dc2/3.jpg";
import dc2_four from "../assets/productImages/DataCables/dc2/4.jpg";
import PTDC_203 from "../assets/productImages/DataCables/PTDC-203.jpg";
import PTCH_103 from "../assets/productImages/Chargers/PTCH-103.jpg";
import Travel_Charger_2_4A from "../assets/productImages/Chargers/Travel-Charger-2_4A.jpg";
import PH_Y01 from "../assets/productImages/Handsfree/PH-Y01.jpg";
import Premium_Earphone_3_5mm from "../assets/productImages/Handsfree/Premium_Earphone_3_5mm.jpg";
import Micro_SD_32GB from "../assets/productImages/MicroSD/Micro_SD_32GB.jpg";
import Micro_SD_16GB from "../assets/productImages/MicroSD/Micro_SD_16GB.jpg";
import Micro_SD_8GB from "../assets/productImages/MicroSD/Micro_SD_8GB.jpg";
import Micro_SD_4GB from "../assets/productImages/MicroSD/Micro_SD_4GB.jpg";
import PenDrive_32GB from "../assets/productImages/PenDrive/PenDrive_32GB.jpg";
import PenDrive_16GB from "../assets/productImages/PenDrive/PenDrive_16GB.jpg";
import PenDrive_8GB from "../assets/productImages/PenDrive/PenDrive_8GB.jpg";
import PenDrive_4GB from "../assets/productImages/PenDrive/PenDrive_4GB.jpg";

const product_card = [
    {
        id: 'dc1',
        product_name: 'Data Cable 2.0A',
        title_description: 'FOR YOUR DAILY NEED OF PHONE CHARGING & DATA TRANSFER',
        description: ['Sync & Charge Together', 'Pure Copper Wire', '2 Amp Output', 'Fast Charging', 'Avialable: V8, Type-C and Lightening'],
        price: 100,
        product_image: DC2_0A,
        extra_image: [DC2_0A, dc1_two, dc1_three],
        catagory: 'data-cables'
    },

    {
        id: 'dc2',
        product_name: 'PTDC-202',
        title_description: 'FOR YOUR DAILY NEED OF PHONE CHARGING & DATA TRANSFER',
        description: ['Sync & Charge Together', 'Pure Copper Wire', '2.4 Amp Output', 'Fast Charging', 'Avialable: V8, Type-C and Lightening'],
        price: 100,
        product_image: PTDC_202,
        extra_image: [PTDC_202, dc2_two, dc2_three, dc2_four],
        catagory: 'data-cables'
    },

    {
        id: 'dc3',
        product_name: 'PTDC-203',
        title_description: 'FOR YOUR DAILY NEED OF PHONE CHARGING & DATA TRANSFER',
        description: ['Sync & Charge Together', 'Pure Copper Wire', '3.1 Amp Output', 'Fast Charging', 'Avialable: V8, Type-C and Lightening'],
        price: 100,
        product_image: PTDC_203,
        extra_image: [PTDC_203, dc1_two, dc1_three, dc2_four],
        catagory: 'data-cables'
    },

    {
        id: 'ch1',
        product_name: 'PTCH-103',
        title_description: 'Premium Travel Charger With 2 USB Ports',
        description: ['Short Circuit Protection', 'Over Voltage Current Protection', 'Stabilized Output And No Interference', '3.1A Output max'],
        price: 100,
        product_image: PTCH_103,
        catagory: 'chargers',
        avialable: ''
    },

    {
        id: 'ch2',
        product_name: 'Travel Charger 2.4A',
        title_description: 'Smart Quick Charger With 2 USB Ports',
        description: ['Short Circuit Protection', 'Over Voltage Current Protection', 'Stabilized Output And No Interference', '2.4A Output'],
        price: 100,
        product_image: Travel_Charger_2_4A,
        catagory: 'chargers',
        avialable: ''
    },

    {
        id: 'hf1',
        product_name: 'PH-Y01',
        title_description: 'Stereo Earphone, Clean and Balanced Acoustic Sound',
        description: ['Extra Bass', 'Clear Sound', 'Best Quality'],
        price: 100,
        product_image: PH_Y01,
        catagory: 'handsfree',
        avialable: ''
    },

    {
        id: 'hf2',
        product_name: 'Premium Earphone 3.5mm',
        title_description: 'Premium Crystal Sound Earphone',
        description: ['Extra Bass', 'Crystal Clear Sound', 'Best Quality'],
        price: 100,
        product_image: Premium_Earphone_3_5mm,
        catagory: 'handsfree',
        avialable: ''
    },

    {
        id: 'sd1',
        product_name: 'Micro SD 32GB',
        title_description: 'Store Your Favorite Photos, Videos, Apps, Games, Data etc.',
        description: ['High Speed Data Transfer UPTO 24MB/s', 'Store Photos, Videos, Apps, Data etc.'],
        price: 100,
        product_image: Micro_SD_32GB,
        catagory: 'microSD',
        avialable: ''
    },

    {
        id: 'sd2',
        product_name: 'Micro SD 16GB',
        title_description: 'Store Your Favorite Photos, Videos, Apps, Games, Data etc.',
        description: ['High Speed Data Transfer UPTO 24MB/s', 'Store Photos, Videos, Apps, Data etc.'],
        price: 100,
        product_image: Micro_SD_16GB,
        catagory: 'microSD',
        avialable: ''
    },

    {
        id: 'sd3',
        product_name: 'Micro SD 8GB',
        title_description: 'Store Your Favorite Photos, Videos, Apps, Games, Data etc.',
        description: ['High Speed Data Transfer UPTO 24MB/s', 'Store Photos, Videos, Apps, Data etc.'],
        price: 100,
        product_image: Micro_SD_8GB,
        catagory: 'microSD',
        avialable: ''
    },

    {
        id: 'sd4',
        product_name: 'Micro SD 4GB',
        title_description: 'Store Your Favorite Photos, Videos, Apps, Games, Data etc.',
        description: ['High Speed Data Transfer UPTO 24MB/s', 'Store Photos, Videos, Apps, Data etc.'],
        price: 100,
        product_image: Micro_SD_4GB,
        catagory: 'microSD',
        avialable: ''
    },

    {
        id: 'pd1',
        product_name: 'USB Flash Drive 32GB',
        title_description: 'Store and Carry Your Important Files and Media Wherever You Go',
        description: ['USB 2.0', 'DVO Plus Micro', 'Full Metal Body'],
        price: 100,
        product_image: PenDrive_32GB,
        catagory: 'pendrive',
        avialable: ''
    },

    {
        id: 'pd2',
        product_name: 'USB Flash Drive 16GB',
        title_description: 'Store and Carry Your Important Files and Media Wherever You Go',
        description: ['USB 2.0', 'DVO Plus Micro', 'Full Metal Body'],
        price: 100,
        product_image: PenDrive_16GB,
        catagory: 'pendrive',
        avialable: ''
    },

    {
        id: 'pd3',
        product_name: 'USB Flash Drive 8GB',
        title_description: 'Store and Carry Your Important Files and Media Wherever You Go',
        description: ['USB 2.0', 'DVO Plus Micro', 'Full Metal Body'],
        price: 100,
        product_image: PenDrive_8GB,
        catagory: 'pendrive',
        avialable: ''
    },

    {
        id: 'pd4',
        product_name: 'USB Flash Drive 4GB',
        title_description: 'Store and Carry Your Important Files and Media Wherever You Go',
        description: ['USB 2.0', 'DVO Plus Micro', 'Full Metal Body'],
        price: 100,
        product_image: PenDrive_4GB,
        catagory: 'pendrive',
        avialable: ''
    }
]

export default product_card;