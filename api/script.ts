import { Prisma, PrismaClient } from "@prisma/client";
import { writeFileSync } from "fs";

const prisma = new PrismaClient();

writeFileSync("dmmf.json", JSON.stringify(Prisma.dmmf, null, 2));

const SocialNetworks = ["Github", "Twitter", "LinkedIn"];

const run = async () => {
  const formInput: Prisma.BasicCreateInput = {
    firstName: "Firat",
    lastName: "Özcan",
    email: `firat.oezcan+${Date.now()}@gmail.com`,
    image: "https://www.fillmurray.com/g/200/200",
    label: "Entwickler",
    phone: "123123",
    summary: "The Best Dev",
  };

  const profiles = SocialNetworks.map((network): Prisma.ProfileCreateInput => {
    return {
      network,
      url: `https://${network}.com`.toLowerCase(),
      username: formInput.firstName,
    };
  });

  const response = await prisma.user.create({
    data: {
      basics: {
        create: formInput,
      },
      location: {
        create: {
          city: "Salzgitter",
          address: "Heinrichstraße 9",
          countryCode: "DE",
          postalCode: "38259",
          region: "Niedersachsen",
        },
      },
      profiles: {
        createMany: {
          data: profiles,
        },
      },
    },
    include: {
      basics: true,
      location: true,
      profiles: true,
    },
  });
  console.log(response);
};
