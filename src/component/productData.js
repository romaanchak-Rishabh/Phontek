// dc1 data
import DC2_0A from "../assets/productImages/DataCables/DC_2-0A.jpg";
// import dc1_two from "../assets/productImages/DataCables/dc1/2.jpg"; commented because blurry image
import dc1_three from "../assets/productImages/DataCables/dc1/3.jpg";

// dc2 data
import PTDC_202 from "../assets/productImages/DataCables/PTDC-202.jpg";
import dc2_two from "../assets/productImages/DataCables/dc2/2.jpg";
import dc2_three from "../assets/productImages/DataCables/dc2/3.jpg";
import dc2_four from "../assets/productImages/DataCables/dc2/4.jpg";

// dc3 data
import PTDC_203 from "../assets/productImages/DataCables/PTDC-203.jpg";
import dc3_two from "../assets/productImages/DataCables/dc3/2.jpg";

// ch1 data
import PTCH_103 from "../assets/productImages/Chargers/PTCH-103.jpg";
import ch1_two from "../assets/productImages/Chargers/ch1/2.jpg";

// ch2 data
import Travel_Charger_2_4A from "../assets/productImages/Chargers/Travel-Charger-2_4A.jpg";
import ch2_two from "../assets/productImages/Chargers/ch2/2.jpg";
import ch2_three from "../assets/productImages/Chargers/ch2/3.jpg";

// hf 1 data
import PH_Y01 from "../assets/productImages/Handsfree/PH-Y01.jpg";
import hf1_two from "../assets/productImages/Handsfree/hf1/2.jpg";
import hf1_three from "../assets/productImages/Handsfree/hf1/3.jpg";
import hf1_four from "../assets/productImages/Handsfree/hf1/4.jpg";
import hf1_five from "../assets/productImages/Handsfree/hf1/5.jpg";

// hf2 data
import Premium_Earphone_3_5mm from "../assets/productImages/Handsfree/Premium_Earphone_3_5mm.jpg";
import hf2_two from "../assets/productImages/Handsfree/hf2/2.jpg";
import hf2_three from "../assets/productImages/Handsfree/hf2/3.jpg";
import hf2_four from "../assets/productImages/Handsfree/hf2/4.jpg";

// sd1 data
import Micro_SD_32GB from "../assets/productImages/MicroSD/Micro_SD_32GB.jpg";
import sd1_two from "../assets/productImages/MicroSD/sd1/2.jpg";
import sd1_three from "../assets/productImages/MicroSD/sd1/3.jpg";

// sd2 data
import Micro_SD_16GB from "../assets/productImages/MicroSD/Micro_SD_16GB.jpg";
import sd2_two from "../assets/productImages/MicroSD/sd2/2.jpg";
import sd2_three from "../assets/productImages/MicroSD/sd2/3.jpg";

// sd3 data
import Micro_SD_8GB from "../assets/productImages/MicroSD/Micro_SD_8GB.jpg";
import sd3_two from "../assets/productImages/MicroSD/sd3/2.jpg";
import sd3_three from "../assets/productImages/MicroSD/sd3/3.jpg";

// sd4 data
import Micro_SD_4GB from "../assets/productImages/MicroSD/Micro_SD_4GB.jpg";
import sd4_two from "../assets/productImages/MicroSD/sd4/2.jpg";
import sd4_three from "../assets/productImages/MicroSD/sd4/3.jpg";

// pd1 data
import PenDrive_32GB from "../assets/productImages/PenDrive/PenDrive_32GB.jpg";
import pd1_two from "../assets/productImages/PenDrive/pd1/2.jpg";

// pd2 data
import PenDrive_16GB from "../assets/productImages/PenDrive/PenDrive_16GB.jpg";
import pd2_two from "../assets/productImages/PenDrive/pd2/2.jpg";

// pd3 data
import PenDrive_8GB from "../assets/productImages/PenDrive/PenDrive_8GB.jpg";
import pd3_two from "../assets/productImages/PenDrive/pd3/2.jpg";

// pd4 data
import PenDrive_4GB from "../assets/productImages/PenDrive/PenDrive_4GB.jpg";
import pd4_two from "../assets/productImages/PenDrive/pd4/2.jpg";


const product_card = [
    {
        id: 'dc1',
        product_name: 'Data Cable 2.0A',
        title_description: 'FOR YOUR DAILY NEED OF PHONE CHARGING & DATA TRANSFER',
        description: ['Sync & Charge Together', 'Pure Copper Wire', '2 Amp Output', 'Fast Charging', 'Avialable: V8, Type-C and Lightening'],
        price: 100,
        product_image: DC2_0A,
        extra_image: [DC2_0A, dc1_three],
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
        extra_image: [PTDC_203, dc3_two],
        catagory: 'data-cables'
    },

    {
        id: 'ch1',
        product_name: 'PTCH-103',
        title_description: 'Premium Travel Charger With 2 USB Ports',
        description: ['Short Circuit Protection', 'Over Voltage Current Protection', 'Stabilized Output And No Interference', '3.1A Output max'],
        price: 100,
        product_image: PTCH_103,
        extra_image: [PTCH_103, ch1_two],
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
        extra_image: [Travel_Charger_2_4A, ch2_two, ch2_three],
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
        extra_image: [PH_Y01, hf1_two, hf1_three, hf1_four, hf1_five],
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
        extra_image: [Premium_Earphone_3_5mm, hf2_two, hf2_three, hf2_four],
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
        extra_image: [Micro_SD_32GB, sd1_two, sd1_three],
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
        extra_image: [Micro_SD_16GB, sd2_two, sd2_three],
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
        extra_image: [Micro_SD_8GB, sd3_two, sd3_three],
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
        extra_image: [Micro_SD_4GB, sd4_two, sd4_three],
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
        extra_image: [PenDrive_32GB, pd1_two],
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
        extra_image: [PenDrive_16GB, pd2_two],
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
        extra_image: [PenDrive_8GB, pd3_two],
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
        extra_image: [PenDrive_4GB, pd4_two],
        catagory: 'pendrive',
        avialable: ''
    }
]

export default product_card;