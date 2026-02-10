// /Data/geoData.ts

export type WindSpeedCategory = "T10" | "T50" | "T200" | "MRI 700";

export interface CityDesignRecord {
  cityCode: string; // e.g. "ACAPULCO_GRO"

  label: string;

  elevationM: number;

  wind: Record<WindSpeedCategory, number>;
}

export interface CountryDesignConfig {
  countryCode: string; // e.g. "MX"
  label: string; // e.g. "Mexico"
  cities: CityDesignRecord[];
}

export const GEO_DESIGN_DATA: CountryDesignConfig[] = [
  {
    countryCode: "MX",
    label: "Mexico",
    cities: [
      {
        cityCode: "ACAPULCO_GRO",
        label: "Acapulco, Gro.",
        elevationM: 28,
        wind: {
          T10: 112,
          T50: 140.7,
          T200: 163.4,
          "MRI 700": 183.83109675249563,
        },
      },
      {
        cityCode: "AGUASCALIENTES_AGS",
        label: "Aguascalientes, Ags.",
        elevationM: 1908,
        wind: {
          T10: 111.4,
          T50: 134.4,
          T200: 152.7,
          "MRI 700": 169.17088416610875,
        },
      },
      {
        cityCode: "ALVARADO_VER",
        label: "Alvarado, Ver.",
        elevationM: 10,
        wind: {
          T10: 114.4,
          T50: 131.1,
          T200: 148,
          "MRI 700": 163.21081652498572,
        },
      },
      {
        cityCode: "BAHIA_DE_LOS_ANGELES_B_C",
        label: "Bahía de los Ángeles, B. C.",
        elevationM: 11,
        wind: { T10: 100.3, T50: 115, T200: 132, "MRI 700": 147.3008213564945 },
      },
      {
        cityCode: "BASASEACHI_CHIH",
        label: "Basaseachi, Chih.",
        elevationM: 2100,
        wind: {
          T10: 99.3,
          T50: 112.4,
          T200: 123.2,
          "MRI 700": 132.92052180294945,
        },
      },
      {
        cityCode: "BUENAVISTA_EDO_MEX",
        label: "Buenavista, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 92.48,
          T50: 106.62,
          T200: 118.31,
          "MRI 700": 128.8315648033777,
        },
      },
      {
        cityCode: "CABO_SAN_LUCAS_BCS",
        label: "Cabo San Lucas, B.C.S.",
        elevationM: 10,
        wind: {
          T10: 136.2,
          T50: 173.66,
          T200: 202.84,
          "MRI 700": 229.10340983426528,
        },
      },
      {
        cityCode: "CALAKMUL_CAMP",
        label: "Calakmul, Camp.",
        elevationM: 250,
        wind: {
          T10: 72.3,
          T50: 82.3,
          T200: 91.1,
          "MRI 700": 99.02042517277361,
        },
      },
      {
        cityCode: "CAMPECHE_CAMP",
        label: "Campeche, Camp.",
        elevationM: 5,
        wind: {
          T10: 100.9,
          T50: 126.8,
          T200: 154.8,
          "MRI 700": 180.00135282246154,
        },
      },
      {
        cityCode: "CANCUN_Q_ROO",
        label: "Cancún, Q. Roo",
        elevationM: 10,
        wind: {
          T10: 131.51,
          T50: 195.92,
          T200: 241.09,
          "MRI 700": 281.745182392521,
        },
      },
      {
        cityCode: "CATAVINA_B_C",
        label: "Cataviña, B. C.",
        elevationM: 561,
        wind: {
          T10: 107.2,
          T50: 123.1,
          T200: 135.9,
          "MRI 700": 147.4206184331253,
        },
      },
      {
        cityCode: "CD_ACUNA_COAH",
        label: "Cd. Acuña, Coah.",
        elevationM: 280,
        wind: {
          T10: 125.77,
          T50: 142.02,
          T200: 154.05,
          "MRI 700": 164.8775812305076,
        },
      },
      {
        cityCode: "CD_APODACA_N_L",
        label: "Cd. Apodaca, N. L.",
        elevationM: 440,
        wind: {
          T10: 126.07,
          T50: 147.21,
          T200: 164.54,
          "MRI 700": 180.13783730047348,
        },
      },
      {
        cityCode: "CD_BENITO_JUAREZ_NL",
        label: "Cd. Benito Juárez, N.L.",
        elevationM: 500,
        wind: {
          T10: 126.45,
          T50: 147.74,
          T200: 165.24,
          "MRI 700": 180.99084551403845,
        },
      },
      {
        cityCode: "CD_CONSTITUCION_B_C_S",
        label: "Cd. Constitución, B. C. S.",
        elevationM: 25,
        wind: {
          T10: 102.5,
          T50: 135.6,
          T200: 160.8,
          "MRI 700": 183.4812175402154,
        },
      },
      {
        cityCode: "CD_DE_VILLA_DE_ALVAREZ_COL",
        label: "Cd. de Villa de Álvarez, Col.",
        elevationM: 505,
        wind: {
          T10: 94.71,
          T50: 118.31,
          T200: 134.79,
          "MRI 700": 149.62279623264877,
        },
      },
      {
        cityCode: "CD_DEL_CARMEN_CAMP",
        label: "Cd. del Carmen, Camp.",
        elevationM: 2,
        wind: {
          T10: 93.08,
          T50: 110.85,
          T200: 128.03,
          "MRI 700": 143.49283005321033,
        },
      },
      {
        cityCode: "CD_GENERAL_ESCOBEDO_N_L",
        label: "Cd. General Escobedo, N. L.",
        elevationM: 450,
        wind: {
          T10: 125.91,
          T50: 146.98,
          T200: 164.25,
          "MRI 700": 179.79383440156823,
        },
      },
      {
        cityCode: "CD_GUZMAN_JAL",
        label: "Cd. Guzmán, Jal.",
        elevationM: 1507,
        wind: {
          T10: 85.1,
          T50: 101.7,
          T200: 115.4,
          "MRI 700": 127.73066191670439,
        },
      },
      {
        cityCode: "CD_JUAREZ_CHIH",
        label: "Cd. Juárez, Chih.",
        elevationM: 1144,
        wind: {
          T10: 126.06,
          T50: 140.91,
          T200: 152.92,
          "MRI 700": 163.7295802642058,
        },
      },
      {
        cityCode: "CD_LOPEZ_MATEOS_EDO_MEX",
        label: "Cd. López Mateos, Edo. Méx.",
        elevationM: 2240,
        wind: {
          T10: 92.68,
          T50: 106.75,
          T200: 118.14,
          "MRI 700": 128.39155030885132,
        },
      },
      {
        cityCode: "CD_MADERO_TAMPS",
        label: "Cd. Madero, Tamps.",
        elevationM: 10,
        wind: {
          T10: 127.26,
          T50: 152.7,
          T200: 180.1,
          "MRI 700": 204.76132383340877,
        },
      },
      {
        cityCode: "CD_NEZAHUALCOYOTL_EDO_MEX",
        label: "Cd. Nezahualcóyotl, Edo. Méx.",
        elevationM: 2220,
        wind: {
          T10: 90.93,
          T50: 105.32,
          T200: 117.68,
          "MRI 700": 128.80459717448662,
        },
      },
      {
        cityCode: "CD_OBREGON_SON",
        label: "Cd. Obregón, Son.",
        elevationM: 100,
        wind: {
          T10: 131,
          T50: 152,
          T200: 168.9,
          "MRI 700": 184.11081652498572,
        },
      },
      {
        cityCode: "CD_SANTA_CATARINA_N_L",
        label: "Cd. Santa Catarina, N. L.",
        elevationM: 680,
        wind: {
          T10: 124.53,
          T50: 144.97,
          T200: 161.77,
          "MRI 700": 176.89081169347693,
        },
      },
      {
        cityCode: "CD_VALLES_S_L_P",
        label: "Cd. Valles, S. L. P.",
        elevationM: 120,
        wind: {
          T10: 108.22,
          T50: 124.92,
          T200: 137.97,
          "MRI 700": 149.71563051189725,
        },
      },
      {
        cityCode: "CD_VICTORIA_TAMPS",
        label: "Cd. Victoria, Tamps.",
        elevationM: 380,
        wind: {
          T10: 108.1,
          T50: 127.6,
          T200: 143.6,
          "MRI 700": 158.00077304140657,
        },
      },
      {
        cityCode: "CELAYA_GTO",
        label: "Celaya, Gto.",
        elevationM: 1767,
        wind: {
          T10: 100.11,
          T50: 115.28,
          T200: 124.83,
          "MRI 700": 133.42546140908956,
        },
      },
      {
        cityCode: "CELESTUN_YUC",
        label: "Celestún, Yuc.",
        elevationM: 0,
        wind: {
          T10: 107.5,
          T50: 135.1,
          T200: 162.7,
          "MRI 700": 187.54133349642635,
        },
      },
      {
        cityCode: "CHALCO_DE_DIAZ_COVARRUBIAS_EDO_MEX",
        label: "Chalco de Díaz Covarrubias, Edo. Méx.",
        elevationM: 2237,
        wind: {
          T10: 91.35,
          T50: 105.79,
          T200: 117.95,
          "MRI 700": 128.894587511469,
        },
      },
      {
        cityCode: "CHAPALA_JAL",
        label: "Chapala, Jal.",
        elevationM: 1515,
        wind: {
          T10: 106.1,
          T50: 122.1,
          T200: 134.9,
          "MRI 700": 146.4206184331253,
        },
      },
      {
        cityCode: "CHAPINGO_EDO_MEX",
        label: "Chapingo, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 88.3,
          T50: 103.7,
          T200: 117,
          "MRI 700": 128.97064259066923,
        },
      },
      {
        cityCode: "CHETUMAL_Q_ROO",
        label: "Chetumal, Q. Roo",
        elevationM: 3,
        wind: {
          T10: 96.4,
          T50: 150.1,
          T200: 189.7,
          "MRI 700": 225.34191327748127,
        },
      },
      {
        cityCode: "CHICOLOAPAN_DE_JUAREZ_EDO_MEX",
        label: "Chicoloapan de Juárez, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 90.1,
          T50: 104.42,
          T200: 116.47,
          "MRI 700": 127.31558219680933,
        },
      },
      {
        cityCode: "CHIHUAHUA_CHIH",
        label: "Chihuahua, Chih.",
        elevationM: 1423,
        wind: {
          T10: 116.1,
          T50: 134.9,
          T200: 150,
          "MRI 700": 163.59072955782744,
        },
      },
      {
        cityCode: "CHILPANCINGO_GRO",
        label: "Chilpancingo, Gro.",
        elevationM: 1369,
        wind: {
          T10: 112.9,
          T50: 129.7,
          T200: 143.3,
          "MRI 700": 155.54065708519562,
        },
      },
      {
        cityCode: "CHIMALHUACAN_EDO_MEX",
        label: "Chimalhuacán, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 90.76,
          T50: 105.14,
          T200: 117.46,
          "MRI 700": 128.54859524188305,
        },
      },
      {
        cityCode: "CIUDAD_ALEMAN_VER",
        label: "Ciudad Alemán, Ver.",
        elevationM: 20,
        wind: {
          T10: 81.2,
          T50: 92.6,
          T200: 102.2,
          "MRI 700": 110.84046382484397,
        },
      },
      {
        cityCode: "CIUDAD_DE_MEXICO",
        label: "Ciudad de México.",
        elevationM: 2240,
        wind: {
          T10: 104.1,
          T50: 118.8,
          T200: 130.8,
          "MRI 700": 141.60057978105496,
        },
      },
      {
        cityCode: "COATZACOALCOS_VER",
        label: "Coatzacoalcos, Ver.",
        elevationM: 14,
        wind: {
          T10: 122.8,
          T50: 140,
          T200: 153.9,
          "MRI 700": 166.410671579722,
        },
      },
      {
        cityCode: "COLIMA_COL",
        label: "Colima, Col.",
        elevationM: 494,
        wind: {
          T10: 95.57,
          T50: 119.67,
          T200: 136.81,
          "MRI 700": 152.2368281206068,
        },
      },
      {
        cityCode: "COLOTLAN_JAL",
        label: "Colotlán, Jal.",
        elevationM: 1589,
        wind: {
          T10: 126.2,
          T50: 147.3,
          T200: 164.1,
          "MRI 700": 179.2208116934769,
        },
      },
      {
        cityCode: "COMITAN_CHIS",
        label: "Comitán, Chis.",
        elevationM: 1530,
        wind: {
          T10: 86.4,
          T50: 98.4,
          T200: 108.3,
          "MRI 700": 117.21047831937031,
        },
      },
      {
        cityCode: "CORDOBA_VER",
        label: "Córdoba, Ver.",
        elevationM: 860,
        wind: {
          T10: 129.23,
          T50: 151.07,
          T200: 170.31,
          "MRI 700": 187.62692958229144,
        },
      },
      {
        cityCode: "COZUMEL_Q_ROO",
        label: "Cozumel, Q. Roo",
        elevationM: 10,
        wind: {
          T10: 135.4,
          T50: 198.7,
          T200: 245.5,
          "MRI 700": 287.6222611461143,
        },
      },
      {
        cityCode: "CUATRO_CIENEGAS_COAH",
        label: "Cuatro Ciénegas, Coah.",
        elevationM: 740,
        wind: {
          T10: 119,
          T50: 131.9,
          T200: 142.6,
          "MRI 700": 152.23051697144064,
        },
      },
      {
        cityCode: "CUAUTITLAN_IZCALLI_EDO_MEX",
        label: "Cuautitlán Izcalli, Edo. Méx.",
        elevationM: 2280,
        wind: {
          T10: 92.88,
          T50: 107,
          T200: 118.47,
          "MRI 700": 128.79355417405833,
        },
      },
      {
        cityCode: "CUAUTLA_MOR",
        label: "Cuautla, Mor.",
        elevationM: 1300,
        wind: {
          T10: 95.86,
          T50: 111.01,
          T200: 123.25,
          "MRI 700": 134.26659137667605,
        },
      },
      {
        cityCode: "CUERNAVACA_MOR",
        label: "Cuernavaca, Mor.",
        elevationM: 1560,
        wind: {
          T10: 94.7,
          T50: 110.3,
          T200: 122.9,
          "MRI 700": 134.24060877010768,
        },
      },
      {
        cityCode: "CULIACAN_SIN",
        label: "Culiacán, Sin.",
        elevationM: 84,
        wind: {
          T10: 102.2,
          T50: 130.8,
          T200: 154.9,
          "MRI 700": 176.59116439361867,
        },
      },
      {
        cityCode: "DELICIAS_CHIH",
        label: "Delicias, Chih.",
        elevationM: 1170,
        wind: {
          T10: 131.3,
          T50: 148.5,
          T200: 162.4,
          "MRI 700": 174.910671579722,
        },
      },
      {
        cityCode: "DURANGO_DGO",
        label: "Durango, Dgo.",
        elevationM: 1889,
        wind: {
          T10: 110.6,
          T50: 126.2,
          T200: 138.9,
          "MRI 700": 150.33061360161648,
        },
      },
      {
        cityCode: "ECATEPEC_DE_MORELOS_EDO_MEX",
        label: "Ecatepec de Morelos, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.47,
          T50: 105.65,
          T200: 117.47,
          "MRI 700": 128.1085710843391,
        },
      },
      {
        cityCode: "EMPALME_SON",
        label: "Empalme, Son.",
        elevationM: 10,
        wind: {
          T10: 99.6,
          T50: 123.6,
          T200: 145.4,
          "MRI 700": 165.0210532689165,
        },
      },
      {
        cityCode: "ENSENADA_B_C",
        label: "Ensenada, B. C.",
        elevationM: 13,
        wind: {
          T10: 81,
          T50: 96.8,
          T200: 109.6,
          "MRI 700": 121.12061843312526,
        },
      },
      {
        cityCode: "ESCARCEGA_CAMP",
        label: "Escárcega, Camp.",
        elevationM: 60,
        wind: {
          T10: 85.5,
          T50: 98.4,
          T200: 109.6,
          "MRI 700": 119.6805411289846,
        },
      },
      {
        cityCode: "FELIPE_CARRILLO_PUERTO_Q_ROO",
        label: "Felipe Carrillo Puerto, Q. Roo",
        elevationM: 20,
        wind: {
          T10: 96,
          T50: 140.4,
          T200: 171.9,
          "MRI 700": 200.25152192526923,
        },
      },
      {
        cityCode: "FRESNILLO_ZAC",
        label: "Fresnillo, Zac.",
        elevationM: 2210,
        wind: {
          T10: 119.91,
          T50: 137.53,
          T200: 151.67,
          "MRI 700": 164.39668317534304,
        },
      },
      {
        cityCode: "GOMEZ_PALACIO_DGO",
        label: "Gómez Palacio, Dgo.",
        elevationM: 1132,
        wind: {
          T10: 132.12,
          T50: 155.18,
          T200: 175.05,
          "MRI 700": 192.9339600207968,
        },
      },
      {
        cityCode: "GUADALAJARA_JAL",
        label: "Guadalajara, Jal.",
        elevationM: 1589,
        wind: {
          T10: 92.8,
          T50: 107.6,
          T200: 119.7,
          "MRI 700": 130.59058461256373,
        },
      },
      {
        cityCode: "GUADALUPE_N_L",
        label: "Guadalupe, N. L.",
        elevationM: 500,
        wind: {
          T10: 126.04,
          T50: 147.16,
          T200: 164.47,
          "MRI 700": 180.04983633417174,
        },
      },
      {
        cityCode: "GUANAJUATO_GTO",
        label: "Guanajuato, Gto.",
        elevationM: 2050,
        wind: {
          T10: 137.9,
          T50: 157,
          T200: 171.5,
          "MRI 700": 184.55070056877472,
        },
      },
      {
        cityCode: "GUAYMAS_SON",
        label: "Guaymas, Son.",
        elevationM: 44,
        wind: {
          T10: 97.9,
          T50: 123.6,
          T200: 146.8,
          "MRI 700": 167.68112091003957,
        },
      },
      {
        cityCode: "GUSTAVO_DIAZ_ORDAZ_B_C_S",
        label: "Gustavo Díaz Ordaz, B. C. S.",
        elevationM: 20,
        wind: {
          T10: 84.1,
          T50: 104.3,
          T200: 123,
          "MRI 700": 139.83090349214393,
        },
      },
      {
        cityCode: "HERMOSILLO_SON",
        label: "Hermosillo, Son.",
        elevationM: 237,
        wind: {
          T10: 89.2,
          T50: 106.6,
          T200: 120.7,
          "MRI 700": 133.39068124273956,
        },
      },
      {
        cityCode: "HEROICA_MATAMOROS_TAMPS",
        label: "Heroica Matamoros, Tamps.",
        elevationM: 8,
        wind: {
          T10: 113.2,
          T50: 164.6,
          T200: 204.7,
          "MRI 700": 240.79193743502523,
        },
      },
      {
        cityCode: "HEROICA_NOGALES_SON",
        label: "Heroica Nogales, Son.",
        elevationM: 1199,
        wind: {
          T10: 112.11,
          T50: 125.7,
          T200: 137.16,
          "MRI 700": 147.47455369090744,
        },
      },
      {
        cityCode: "HIDALGO_DEL_PARRAL_CHIH",
        label: "Hidalgo del Parral, Chih.",
        elevationM: 1661,
        wind: {
          T10: 127.4,
          T50: 149.2,
          T200: 166.5,
          "MRI 700": 182.0708358510209,
        },
      },
      {
        cityCode: "HUAJUAPAN_DE_LEON_OAX",
        label: "Huajuapan de León, Oax.",
        elevationM: 1600,
        wind: {
          T10: 105.9,
          T50: 121.9,
          T200: 134.9,
          "MRI 700": 146.60062809614286,
        },
      },
      {
        cityCode: "HUATULCO_OAX",
        label: "Huatulco, Oax.",
        elevationM: 60,
        wind: {
          T10: 106.5,
          T50: 151.9,
          T200: 185.3,
          "MRI 700": 215.36161372393627,
        },
      },
      {
        cityCode: "HUIXQUILUCAN_EDO_MEX",
        label: "Huixquilucan, Edo. Méx.",
        elevationM: 2700,
        wind: {
          T10: 92.34,
          T50: 106.42,
          T200: 117.86,
          "MRI 700": 128.15655272460572,
        },
      },
      {
        cityCode: "IGUALA_DE_LA_INDEPENDENCIA_GRO",
        label: "Iguala de la Independencia, Gro.",
        elevationM: 750,
        wind: {
          T10: 104.52,
          T50: 120.37,
          T200: 133.59,
          "MRI 700": 145.48863872546218,
        },
      },
      {
        cityCode: "IRAPUATO_GTO",
        label: "Irapuato, Gto.",
        elevationM: 1724,
        wind: {
          T10: 114.55,
          T50: 130.88,
          T200: 146.41,
          "MRI 700": 160.38775033331527,
        },
      },
      {
        cityCode: "ISLA_MUJERES_Q_ROO",
        label: "Isla Mujeres, Q. Roo",
        elevationM: 3,
        wind: {
          T10: 138,
          T50: 199.9,
          T200: 239.5,
          "MRI 700": 275.1419132774813,
        },
      },
      {
        cityCode: "ISLA_SOCORRO_COL",
        label: "Isla Socorro, Col.",
        elevationM: 1050,
        wind: {
          T10: 169,
          T50: 215,
          T200: 248.1,
          "MRI 700": 277.89159922940985,
        },
      },
      {
        cityCode: "IXTAPALUCA_EDO_MEX",
        label: "Ixtapaluca, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 90.74,
          T50: 105.1,
          T200: 117.16,
          "MRI 700": 128.0145826799602,
        },
      },
      {
        cityCode: "JIMENEZ_CHIH",
        label: "Jiménez, Chih.",
        elevationM: 1180,
        wind: {
          T10: 100,
          T50: 113.2,
          T200: 124.1,
          "MRI 700": 133.91052663445822,
        },
      },
      {
        cityCode: "JIUTEPEC_MOR",
        label: "Jiutepec, Mor.",
        elevationM: 1350,
        wind: {
          T10: 94.79,
          T50: 109.85,
          T200: 122.23,
          "MRI 700": 133.37259814078837,
        },
      },
      {
        cityCode: "LA_PAZ_B_C_S",
        label: "La Paz, B. C. S.",
        elevationM: 10,
        wind: {
          T10: 124.8,
          T50: 165,
          T200: 195,
          "MRI 700": 222.00144945263736,
        },
      },
      {
        cityCode: "LA_RUMOROSA_B_C",
        label: "La Rumorosa, B. C.",
        elevationM: 1250,
        wind: {
          T10: 117.3,
          T50: 131.1,
          T200: 142.1,
          "MRI 700": 152.00053146596701,
        },
      },
      {
        cityCode: "LAGOS_DE_MORENO_JAL",
        label: "Lagos de Moreno, Jal.",
        elevationM: 1942,
        wind: {
          T10: 119,
          T50: 134.3,
          T200: 146.7,
          "MRI 700": 157.86059910709008,
        },
      },
      {
        cityCode: "LAGUNA_VERDE_VER",
        label: "Laguna Verde, Ver.",
        elevationM: 10,
        wind: {
          T10: 133.48,
          T50: 153.95,
          T200: 170.29,
          "MRI 700": 184.99678946853646,
        },
      },
      {
        cityCode: "LAS_VEGAS_DGO",
        label: "Las Vegas, Dgo.",
        elevationM: 1500,
        wind: {
          T10: 83.2,
          T50: 94.2,
          T200: 103.4,
          "MRI 700": 111.6804444988088,
        },
      },
      {
        cityCode: "LAZARO_CARDENAS_MICH",
        label: "Lázaro Cárdenas, Mich.",
        elevationM: 10,
        wind: {
          T10: 126.2,
          T50: 165.2,
          T200: 194.2,
          "MRI 700": 220.30140113754942,
        },
      },
      {
        cityCode: "LEON_DE_LOS_ALDAMA_GTO",
        label: "León de los Aldama, Gto.",
        elevationM: 1885,
        wind: {
          T10: 120.66,
          T50: 137.52,
          T200: 152.8,
          "MRI 700": 166.5527382545433,
        },
      },
      {
        cityCode: "LORETO_B_C_S",
        label: "Loreto, B. C. S.",
        elevationM: 6,
        wind: {
          T10: 109.1,
          T50: 141.3,
          T200: 167.8,
          "MRI 700": 191.65128034982968,
        },
      },
      {
        cityCode: "LOS_MOCHIS_SIN",
        label: "Los Mochis, Sin.",
        elevationM: 8,
        wind: {
          T10: 113.75,
          T50: 147.16,
          T200: 177.75,
          "MRI 700": 205.28247795853923,
        },
      },
      {
        cityCode: "LOS_REYES_ACAQUILPAN_EDO_MEX",
        label: "Los Reyes Acaquilpan, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.1,
          T50: 105.5,
          T200: 117.86,
          "MRI 700": 128.9845971744866,
        },
      },
      {
        cityCode: "MANZANILLO_COL",
        label: "Manzanillo, Col.",
        elevationM: 8,
        wind: {
          T10: 137.2,
          T50: 184.2,
          T200: 218.3,
          "MRI 700": 248.99164754449782,
        },
      },
      {
        cityCode: "MATLAPA_SLP",
        label: "Matlapa, S.L.P.",
        elevationM: 60,
        wind: {
          T10: 97.2,
          T50: 114.4,
          T200: 128.4,
          "MRI 700": 141.00067641123076,
        },
      },
      {
        cityCode: "MAZATLAN_SIN",
        label: "Mazatlán, Sin.",
        elevationM: 8,
        wind: {
          T10: 124.6,
          T50: 172.6,
          T200: 207.5,
          "MRI 700": 238.9116861965681,
        },
      },
      {
        cityCode: "MERIDA_YUC",
        label: "Mérida, Yuc.",
        elevationM: 10,
        wind: {
          T10: 123.1,
          T50: 164.2,
          T200: 197.3,
          "MRI 700": 227.0915992294099,
        },
      },
      {
        cityCode: "METEPEC_EDO_MEX",
        label: "Metepec, Edo. Méx.",
        elevationM: 2610,
        wind: {
          T10: 90.15,
          T50: 103.73,
          T200: 113.05,
          "MRI 700": 121.43845029661932,
        },
      },
      {
        cityCode: "MEXICALI_B_C",
        label: "Mexicali, B. C.",
        elevationM: 1,
        wind: {
          T10: 110.2,
          T50: 123.2,
          T200: 133.7,
          "MRI 700": 143.15050730842304,
        },
      },
      {
        cityCode: "MINATITLAN_VER",
        label: "Minatitlán, Ver.",
        elevationM: 20,
        wind: {
          T10: 122.87,
          T50: 139.91,
          T200: 154,
          "MRI 700": 166.6816807595887,
        },
      },
      {
        cityCode: "MIRAMAR_TAMPS",
        label: "Miramar, Tamps.",
        elevationM: 10,
        wind: {
          T10: 128.07,
          T50: 153.58,
          T200: 181.07,
          "MRI 700": 205.81232818176667,
        },
      },
      {
        cityCode: "MONCLOVA_COAH",
        label: "Monclova, Coah.",
        elevationM: 591,
        wind: {
          T10: 122.9,
          T50: 143,
          T200: 159.2,
          "MRI 700": 173.78078270442415,
        },
      },
      {
        cityCode: "MONTERREY_N_L",
        label: "Monterrey, N. L.",
        elevationM: 538,
        wind: {
          T10: 126.2,
          T50: 147.5,
          T200: 164.5,
          "MRI 700": 179.8008213564945,
        },
      },
      {
        cityCode: "MORELIA_MICH",
        label: "Morelia, Mich.",
        elevationM: 1920,
        wind: {
          T10: 93,
          T50: 108.1,
          T200: 120.5,
          "MRI 700": 131.66059910709012,
        },
      },
      {
        cityCode: "NAUCALPAN_DE_JUAREZ_EDO_MEX",
        label: "Naucalpan de Juárez, Edo. Méx.",
        elevationM: 2300,
        wind: {
          T10: 92.61,
          T50: 106.73,
          T200: 118.57,
          "MRI 700": 129.22657205064087,
        },
      },
      {
        cityCode: "NAVOJOA_SON",
        label: "Navojoa, Son.",
        elevationM: 40,
        wind: {
          T10: 130.47,
          T50: 151.64,
          T200: 169.84,
          "MRI 700": 186.2208793346,
        },
      },
      {
        cityCode: "NOCHIXTLAN_OAX",
        label: "Nochixtlán, Oax.",
        elevationM: 2010,
        wind: {
          T10: 78.4,
          T50: 87.7,
          T200: 95.5,
          "MRI 700": 102.5203768576857,
        },
      },
      {
        cityCode: "NUEVO_CASAS_GRANDES_CHIH",
        label: "Nuevo Casas Grandes, Chih.",
        elevationM: 1550,
        wind: {
          T10: 121.6,
          T50: 141.9,
          T200: 158.1,
          "MRI 700": 172.68078270442416,
        },
      },
      {
        cityCode: "NUEVO_LAREDO_TAMPS",
        label: "Nuevo Laredo, Tamps.",
        elevationM: 135,
        wind: {
          T10: 114.86,
          T50: 130.24,
          T200: 140.98,
          "MRI 700": 150.64651890404414,
        },
      },
      {
        cityCode: "OAXACA_OAX",
        label: "Oaxaca, Oax.",
        elevationM: 1555,
        wind: {
          T10: 115.5,
          T50: 129,
          T200: 140,
          "MRI 700": 149.90053146596702,
        },
      },
      {
        cityCode: "OJINAGA_CHIH",
        label: "Ojinaga, Chih.",
        elevationM: 800,
        wind: {
          T10: 121.1,
          T50: 137.6,
          T200: 151.1,
          "MRI 700": 163.2506522536868,
        },
      },
      {
        cityCode: "OJO_DE_AGUA_EDO_MEX",
        label: "Ojo de Agua, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.4,
          T50: 105.48,
          T200: 117,
          "MRI 700": 127.36855658981274,
        },
      },
      {
        cityCode: "ORIZABA_VER",
        label: "Orizaba, Ver.",
        elevationM: 1284,
        wind: {
          T10: 129.8,
          T50: 152.7,
          T200: 171.1,
          "MRI 700": 187.66088899761758,
        },
      },
      {
        cityCode: "P_ALLENDE_GTO",
        label: "P. Allende, Gto.",
        elevationM: 1900,
        wind: {
          T10: 81,
          T50: 92.4,
          T200: 101.8,
          "MRI 700": 110.26045416182636,
        },
      },
      {
        cityCode: "PACHUCA_HGO",
        label: "Pachuca, Hgo.",
        elevationM: 2426,
        wind: {
          T10: 90.3,
          T50: 103.5,
          T200: 114.3,
          "MRI 700": 124.02052180294945,
        },
      },
      {
        cityCode: "PALENQUE_CHIS",
        label: "Palenque, Chis.",
        elevationM: 60,
        wind: {
          T10: 72.7,
          T50: 83.3,
          T200: 92.1,
          "MRI 700": 100.02042517277361,
        },
      },
      {
        cityCode: "PIEDRAS_NEGRAS_COAH",
        label: "Piedras Negras, Coah.",
        elevationM: 220,
        wind: {
          T10: 171.8,
          T50: 193.6,
          T200: 209.1,
          "MRI 700": 223.0507488838626,
        },
      },
      {
        cityCode: "PILARES_DE_NACOZARI_SON",
        label: "Pilares de Nacozari, Son.",
        elevationM: 1100,
        wind: {
          T10: 109.21,
          T50: 123.52,
          T200: 135.06,
          "MRI 700": 145.4465575561145,
        },
      },
      {
        cityCode: "PINOTEPA_OAX",
        label: "Pinotepa, Oax.",
        elevationM: 50,
        wind: {
          T10: 96.6,
          T50: 122.9,
          T200: 145.9,
          "MRI 700": 166.60111124702198,
        },
      },
      {
        cityCode: "PLAYA_DEL_CARMEN_Q_ROO",
        label: "Playa del Carmen, Q. Roo",
        elevationM: 10,
        wind: {
          T10: 131.64,
          T50: 190.63,
          T200: 236.21,
          "MRI 700": 277.23420220170703,
        },
      },
      {
        cityCode: "POZA_RICA_DE_HIDALGO_VER",
        label: "Poza Rica de Hidalgo, Ver.",
        elevationM: 60,
        wind: {
          T10: 92.13,
          T50: 111.74,
          T200: 127.77,
          "MRI 700": 142.19777449085922,
        },
      },
      {
        cityCode: "PROGRESO_YUC",
        label: "Progreso, Yuc.",
        elevationM: 8,
        wind: {
          T10: 130,
          T50: 189.6,
          T200: 231.4,
          "MRI 700": 269.02201957067473,
        },
      },
      {
        cityCode: "PUEBLA_PUE",
        label: "Puebla, Pue.",
        elevationM: 2150,
        wind: {
          T10: 99.8,
          T50: 114.3,
          T200: 126,
          "MRI 700": 136.53056528652857,
        },
      },
      {
        cityCode: "PUERTO_CORTES_B_C_S",
        label: "Puerto Cortés, B. C. S.",
        elevationM: 5,
        wind: {
          T10: 118.6,
          T50: 153.3,
          T200: 180.7,
          "MRI 700": 205.36132383340873,
        },
      },
      {
        cityCode: "PUERTO_PENASCO_SON",
        label: "Puerto Peñasco, Son.",
        elevationM: 10,
        wind: {
          T10: 97.5,
          T50: 114.2,
          T200: 129.4,
          "MRI 700": 143.08073438933627,
        },
      },
      {
        cityCode: "PUERTO_VALLARTA_JAL",
        label: "Puerto Vallarta, Jal.",
        elevationM: 2,
        wind: {
          T10: 114.16,
          T50: 145.71,
          T200: 170.34,
          "MRI 700": 192.50819000061526,
        },
      },
      {
        cityCode: "QUERETARO_QRO",
        label: "Querétaro, Qro.",
        elevationM: 1842,
        wind: {
          T10: 117.8,
          T50: 137.6,
          T200: 153.3,
          "MRI 700": 167.43075854688024,
        },
      },
      {
        cityCode: "REYNOSA_TAMPS",
        label: "Reynosa, Tamps.",
        elevationM: 33,
        wind: {
          T10: 99.15,
          T50: 115.56,
          T200: 131.64,
          "MRI 700": 146.1127769066136,
        },
      },
      {
        cityCode: "RIO_VERDE_S_L_P",
        label: "Río Verde, S. L. P.",
        elevationM: 987,
        wind: {
          T10: 117.68,
          T50: 137.12,
          T200: 155.12,
          "MRI 700": 171.32086967158241,
        },
      },
      {
        cityCode: "SALAMANCA_GTO",
        label: "Salamanca, Gto.",
        elevationM: 1720,
        wind: {
          T10: 101.74,
          T50: 117.1,
          T200: 128.03,
          "MRI 700": 137.86752808391088,
        },
      },
      {
        cityCode: "SALINA_CRUZ_OAX",
        label: "Salina Cruz, Oax.",
        elevationM: 6,
        wind: {
          T10: 108.3,
          T50: 127.1,
          T200: 142.3,
          "MRI 700": 155.98073438933628,
        },
      },
      {
        cityCode: "SALTILLO_COAH",
        label: "Saltillo, Coah.",
        elevationM: 1609,
        wind: {
          T10: 119.5,
          T50: 137.5,
          T200: 151.9,
          "MRI 700": 164.86069573726593,
        },
      },
      {
        cityCode: "SAN_CRISTOBAL_DE_LAS_CASAS_CHIS",
        label: "San Cristóbal de las Casas, Chis.",
        elevationM: 2276,
        wind: {
          T10: 82.1,
          T50: 95.3,
          T200: 106.1,
          "MRI 700": 115.82052180294943,
        },
      },
      {
        cityCode: "SAN_FRANCISCO_COACALCO_EDO_MEX",
        label: "San Francisco Coacalco, Edo. Méx.",
        elevationM: 2257,
        wind: {
          T10: 92.49,
          T50: 106.62,
          T200: 118.22,
          "MRI 700": 128.66056045501978,
        },
      },
      {
        cityCode: "SAN_JOSE_DEL_CABO_BCS",
        label: "San José del Cabo, B.C.S.",
        elevationM: 3,
        wind: {
          T10: 139.87,
          T50: 181.17,
          T200: 212.9,
          "MRI 700": 241.45853303773947,
        },
      },
      {
        cityCode: "SAN_JUAN_BAUTISTA_TUXTEPEC_OAX",
        label: "San Juan Bautista Tuxtepec, Oax.",
        elevationM: 20,
        wind: {
          T10: 83.14,
          T50: 94.68,
          T200: 102.01,
          "MRI 700": 108.6073541495944,
        },
      },
      {
        cityCode: "SAN_JUAN_DEL_RIO_QRO",
        label: "San Juan del Río, Qro.",
        elevationM: 1920,
        wind: {
          T10: 108.4,
          T50: 126.02,
          T200: 143.53,
          "MRI 700": 159.28984599718933,
        },
      },
      {
        cityCode: "SAN_JUANICO_B_C_S",
        label: "San Juanico, B. C. S.",
        elevationM: 15,
        wind: {
          T10: 104.1,
          T50: 137.5,
          T200: 162.9,
          "MRI 700": 185.76122720323298,
        },
      },
      {
        cityCode: "SAN_LUIS_POTOSI_S_L_P",
        label: "San Luis Potosí, S. L. P.",
        elevationM: 1864,
        wind: {
          T10: 129.2,
          T50: 151.2,
          T200: 168.9,
          "MRI 700": 184.83085517705607,
        },
      },
      {
        cityCode: "SAN_LUIS_RIO_COLORADO_SON",
        label: "San Luis Río Colorado, Son.",
        elevationM: 40,
        wind: {
          T10: 105.72,
          T50: 118.87,
          T200: 130.41,
          "MRI 700": 140.7965575561145,
        },
      },
      {
        cityCode: "SAN_NICOLAS_DE_LOS_GARZA_N_L",
        label: "San Nicolás de los Garza, N. L.",
        elevationM: 512,
        wind: {
          T10: 125.94,
          T50: 147.01,
          T200: 164.33,
          "MRI 700": 179.91883681732264,
        },
      },
      {
        cityCode: "SAN_PABLO_DE_LAS_SALINAS_EDO_MEX",
        label: "San Pablo de las Salinas, Edo. Méx.",
        elevationM: 2250,
        wind: {
          T10: 91.59,
          T50: 105.68,
          T200: 117.24,
          "MRI 700": 127.64455852241625,
        },
      },
      {
        cityCode: "SAN_PEDRO_GARZA_GARCIA_N_L",
        label: "San Pedro Garza García, N. L.",
        elevationM: 627,
        wind: {
          T10: 125.18,
          T50: 145.9,
          T200: 162.94,
          "MRI 700": 178.276823289098,
        },
      },
      {
        cityCode: "SAN_QUINTIN_B_C",
        label: "San Quintín, B. C.",
        elevationM: 35,
        wind: { T10: 71.2, T50: 85, T200: 98.4, "MRI 700": 110.46064742217803 },
      },
      {
        cityCode: "SANTA_CECILIA_COAH",
        label: "Santa Cecilia, Coah.",
        elevationM: 1000,
        wind: {
          T10: 110.8,
          T50: 126.3,
          T200: 139.1,
          "MRI 700": 150.62061843312526,
        },
      },
      {
        cityCode: "SANTA_ROSALIA_BC",
        label: "Santa Rosalía, B.C.",
        elevationM: 20,
        wind: { T10: 115, T50: 142, T200: 167.3, "MRI 700": 190.0712223717242 },
      },
      {
        cityCode: "SOLEDAD_DE_GRACIANO_SANCHEZ_S_L_P",
        label: "Soledad de Graciano Sánchez, S. L. P.",
        elevationM: 1860,
        wind: {
          T10: 127.58,
          T50: 148.91,
          T200: 167.68,
          "MRI 700": 184.5739068742001,
        },
      },
      {
        cityCode: "SOMBRERETE_ZAC",
        label: "Sombrerete, Zac.",
        elevationM: 2320,
        wind: {
          T10: 120,
          T50: 134.7,
          T200: 146.7,
          "MRI 700": 157.50057978105494,
        },
      },
      {
        cityCode: "SOTO_LA_MARINA_TAMPS",
        label: "Soto la Marina, Tamps.",
        elevationM: 25,
        wind: {
          T10: 109.7,
          T50: 133.6,
          T200: 165.3,
          "MRI 700": 193.83153158828682,
        },
      },
      {
        cityCode: "TAMPICO_TAMPS",
        label: "Tampico, Tamps.",
        elevationM: 12,
        wind: {
          T10: 128.8,
          T50: 154.9,
          T200: 181.9,
          "MRI 700": 206.2013045073736,
        },
      },
      {
        cityCode: "TAMUIN_S_L_P",
        label: "Tamuín, S. L. P.",
        elevationM: 140,
        wind: {
          T10: 110,
          T50: 126.5,
          T200: 140,
          "MRI 700": 152.15065225368681,
        },
      },
      {
        cityCode: "TANTAKIN_YUC",
        label: "Tantakín, Yuc.",
        elevationM: 12,
        wind: {
          T10: 94.8,
          T50: 123.7,
          T200: 150.8,
          "MRI 700": 175.19130933888243,
        },
      },
      {
        cityCode: "TAPACHULA_CHIS",
        label: "Tapachula, Chis.",
        elevationM: 182,
        wind: {
          T10: 86.2,
          T50: 101.5,
          T200: 113.9,
          "MRI 700": 125.06059910709011,
        },
      },
      {
        cityCode: "TEHUACAN_PUE",
        label: "Tehuacán, Pue.",
        elevationM: 1600,
        wind: {
          T10: 118.42,
          T50: 138.3,
          T200: 157.68,
          "MRI 700": 175.12293634640372,
        },
      },
      {
        cityCode: "TEMOSACHIC_CHIH",
        label: "Temósachic, Chih.",
        elevationM: 1977,
        wind: {
          T10: 100.5,
          T50: 114.8,
          T200: 126.5,
          "MRI 700": 137.03056528652857,
        },
      },
      {
        cityCode: "TEPEHUANES_DGO",
        label: "Tepehuanes, Dgo.",
        elevationM: 1960,
        wind: {
          T10: 133.5,
          T50: 152.1,
          T200: 167.1,
          "MRI 700": 180.60072472631867,
        },
      },
      {
        cityCode: "TEPEXPAN_EDO_MEX",
        label: "Tepexpan, Edo. Méx",
        elevationM: 2250,
        wind: {
          T10: 89.97,
          T50: 104.04,
          T200: 115.52,
          "MRI 700": 125.85255465720921,
        },
      },
      {
        cityCode: "TEPIC_NAY",
        label: "Tepic, Nay.",
        elevationM: 915,
        wind: {
          T10: 112.5,
          T50: 132.5,
          T200: 148.8,
          "MRI 700": 163.47078753593297,
        },
      },
      {
        cityCode: "TEXCOCO_DE_MORA_EDO_MEX",
        label: "Texcoco de Mora, Edo. Méx.",
        elevationM: 2247,
        wind: {
          T10: 89.42,
          T50: 103.64,
          T200: 115.29,
          "MRI 700": 125.77556287077418,
        },
      },
      {
        cityCode: "TIJUANA_B_C",
        label: "Tijuana, B. C.",
        elevationM: 30,
        wind: {
          T10: 94.41,
          T50: 108.33,
          T200: 119.36,
          "MRI 700": 129.28753291541966,
        },
      },
      {
        cityCode: "TLALNEPANTLA_EDO_MEX",
        label: "Tlalnepantla, Edo. Méx.",
        elevationM: 2238,
        wind: {
          T10: 92.62,
          T50: 106.8,
          T200: 118.64,
          "MRI 700": 129.29657205064086,
        },
      },
      {
        cityCode: "TLAQUEPAQUE_JAL",
        label: "Tlaquepaque, Jal.",
        elevationM: 1570,
        wind: {
          T10: 97.1,
          T50: 112.59,
          T200: 124.16,
          "MRI 700": 134.57355900556712,
        },
      },
      {
        cityCode: "TLAXCALA_TLAX",
        label: "Tlaxcala, Tlax.",
        elevationM: 2252,
        wind: {
          T10: 74.1,
          T50: 86.1,
          T200: 95.9,
          "MRI 700": 104.72047348786154,
        },
      },
      {
        cityCode: "TOLUCA_EDO_MEX",
        label: "Toluca, Edo. Méx.",
        elevationM: 2680,
        wind: {
          T10: 84.1,
          T50: 96.1,
          T200: 105.8,
          "MRI 700": 114.53046865635274,
        },
      },
      {
        cityCode: "TONALA_JAL",
        label: "Tonalá, Jal.",
        elevationM: 1528,
        wind: {
          T10: 98.07,
          T50: 113.64,
          T200: 125.54,
          "MRI 700": 136.25057494954615,
        },
      },
      {
        cityCode: "TORREON_COAH",
        label: "Torreón, Coah.",
        elevationM: 1120,
        wind: {
          T10: 133,
          T50: 156.4,
          T200: 175.1,
          "MRI 700": 191.93090349214393,
        },
      },
      {
        cityCode: "TULANCINGO_HGO",
        label: "Tulancingo, Hgo.",
        elevationM: 2180,
        wind: {
          T10: 95.5,
          T50: 108.9,
          T200: 119.8,
          "MRI 700": 129.6105266344582,
        },
      },
      {
        cityCode: "TUXPAN_VER",
        label: "Tuxpan, Ver.",
        elevationM: 14,
        wind: {
          T10: 96.9,
          T50: 129.5,
          T200: 163.5,
          "MRI 700": 194.101642712989,
        },
      },
      {
        cityCode: "TUXTLA_GUTIERREZ_CHIS",
        label: "Tuxtla Gutiérrez, Chis.",
        elevationM: 528,
        wind: {
          T10: 111.4,
          T50: 127.5,
          T200: 140.3,
          "MRI 700": 151.82061843312528,
        },
      },
      {
        cityCode: "URUAPAN_MICH",
        label: "Uruapan, Mich.",
        elevationM: 1620,
        wind: {
          T10: 95.24,
          T50: 111.14,
          T200: 125.49,
          "MRI 700": 138.40569332151154,
        },
      },
      {
        cityCode: "VALLADOLID_YUC",
        label: "Valladolid, Yuc.",
        elevationM: 8,
        wind: {
          T10: 107.8,
          T50: 153.6,
          T200: 189.3,
          "MRI 700": 221.43172484863845,
        },
      },
      {
        cityCode: "VERACRUZ_VER",
        label: "Veracruz, Ver.",
        elevationM: 16,
        wind: {
          T10: 161.2,
          T50: 180,
          T200: 193.8,
          "MRI 700": 206.2206667482132,
        },
      },
      {
        cityCode: "VILLA_AHUMADA_CHIH",
        label: "Villa Ahumada, Chih.",
        elevationM: 1240,
        wind: {
          T10: 131.4,
          T50: 148.1,
          T200: 161.7,
          "MRI 700": 173.9406570851956,
        },
      },
      {
        cityCode: "VILLA_NICOLAS_ROMERO_EDO_MEX",
        label: "Villa Nicolás Romero, Edo. Méx.",
        elevationM: 2390,
        wind: {
          T10: 93.01,
          T50: 107.07,
          T200: 118.24,
          "MRI 700": 128.29353967953196,
        },
      },
      {
        cityCode: "VILLAHERMOSA_TAB",
        label: "Villahermosa, Tab.",
        elevationM: 10,
        wind: {
          T10: 112.4,
          T50: 130.8,
          T200: 145.5,
          "MRI 700": 158.73071023179227,
        },
      },
      {
        cityCode: "XALAPA_VER",
        label: "Xalapa, Ver.",
        elevationM: 1417,
        wind: {
          T10: 112,
          T50: 131.3,
          T200: 146.6,
          "MRI 700": 160.37073922084502,
        },
      },
      {
        cityCode: "XICO_EDO_MEX",
        label: "Xico, Edo. Méx.",
        elevationM: 1297,
        wind: {
          T10: 91.44,
          T50: 105.87,
          T200: 118.22,
          "MRI 700": 129.3355966913357,
        },
      },
      {
        cityCode: "YECORA_SON",
        label: "Yécora, Son.",
        elevationM: 1560,
        wind: {
          T10: 97.6,
          T50: 110.5,
          T200: 121.2,
          "MRI 700": 130.83051697144066,
        },
      },
      {
        cityCode: "ZACATECAS_ZAC",
        label: "Zacatecas, Zac.",
        elevationM: 2612,
        wind: {
          T10: 119.8,
          T50: 139.1,
          T200: 154.7,
          "MRI 700": 168.7407537153714,
        },
      },
      {
        cityCode: "ZAMORA_MICH",
        label: "Zamora, Mich.",
        elevationM: 1560,
        wind: {
          T10: 98.4,
          T50: 115.1,
          T200: 128.8,
          "MRI 700": 141.1306619167044,
        },
      },
      {
        cityCode: "ZAPOPAN_JAL",
        label: "Zapopan Jal.",
        elevationM: 1571,
        wind: {
          T10: 96.86,
          T50: 112.35,
          T200: 123.36,
          "MRI 700": 133.26953194911792,
        },
      },
    ],
  },
];

export const getGeoCountries = () =>
  GEO_DESIGN_DATA.map((c) => ({
    code: c.countryCode,
    label: c.label,
  }));

export const getGeoCitiesByCountry = (countryCode: string) => {
  const country = GEO_DESIGN_DATA.find((c) => c.countryCode === countryCode);
  if (!country) return [];
  return country.cities.map((city) => ({
    code: city.cityCode,
    label: city.label,
  }));
};

export const getCityDesignRecord = (
  countryCode: string,
  cityCode: string
): CityDesignRecord | undefined => {
  const country = GEO_DESIGN_DATA.find((c) => c.countryCode === countryCode);
  if (!country) return undefined;
  return country.cities.find((city) => city.cityCode === cityCode);
};

export const getWindSpeedForCity = (
  countryCode: string,
  cityCode: string,
  category: WindSpeedCategory
): number | null => {
  const record = getCityDesignRecord(countryCode, cityCode);
  if (!record) return null;
  return record.wind[category] ?? null;
};
