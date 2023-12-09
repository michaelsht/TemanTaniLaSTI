import styles from "./page.module.css";
import { Card, Text, Image, Stack, Heading, CardBody } from "@chakra-ui/react";
import Link from "next/link";

const Cards = ({ itemName, itemId, itemPrice }) => (
  <div>
    <Link href={`/pemesanan/${itemId}`}>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="/image.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{itemName}</Heading>
            <Text>{itemPrice}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  </div>
);

export default function Pemesanan() {
  const arrItem = [
    { name: "Cangkul", price: "RP. 30.000" },
    { name: "Bibit Padi Tipe A", price: "RP. 30.000" },
    { name: "Bibit Jagung Tipe A", price: "RP. 30.000" },
    { name: "Bibit Padi Tipe B", price: "RP. 30.000" },
    { name: "Bibit Sawi", price: "RP. 30.000" },
    { name: "Garu Sisir", price: "RP. 30.000" },
    { name: "Bibit Jagung Tipe B", price: "RP. 30.000" },
    { name: "Bibit Kentang", price: "RP. 30.000" },
  ];

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "10px 0",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 3,
            width: 40,
            height: 40,
            backgroundColor: "white",
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3.99999H2V5.99999H4.3L7.58 15C7.78631 15.5835 8.16807 16.089 8.67294 16.4471C9.1778 16.8051 9.78106 16.9983 10.4 17H19V15H10.4C10.1945 14.9999 9.99399 14.9365 9.8258 14.8184C9.6576 14.7003 9.52987 14.5333 9.46 14.34L9 13H18.28C18.714 12.9994 19.1361 12.8576 19.4824 12.596C19.8288 12.3344 20.0806 11.9673 20.2 11.55L22 5.26999C22.0406 5.13868 22.0538 5.00039 22.0386 4.86377C22.0234 4.72715 21.9802 4.59512 21.9117 4.47595C21.8432 4.35677 21.7509 4.25299 21.6404 4.1711C21.53 4.08921 21.4039 4.03096 21.27 3.99999C21.1806 3.98543 21.0894 3.98543 21 3.99999ZM18.25 11H8.25L6.43 5.99999H19.67L18.25 11Z"
              fill="black"
            />
            <path
              d="M10.5 21C11.3284 21 12 20.3284 12 19.5C12 18.6716 11.3284 18 10.5 18C9.67157 18 9 18.6716 9 19.5C9 20.3284 9.67157 21 10.5 21Z"
              fill="black"
            />
            <path
              d="M16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5C15 20.3284 15.6716 21 16.5 21Z"
              fill="black"
            />
          </svg>
        </div>
        <div>
          <input
            style={{
              padding: 5,
              borderWidth: 1,
              borderRadius: 7,
              borderColor: "black",
            }}
            placeholder="Cari Produk di sini"
          />
        </div>
      </div>
      <div className={styles.box}>
        {arrItem.map((item, index) => (
          <Cards
            key={index}
            itemName={item.name}
            itemId={index}
            itemPrice={item.price}
          />
        ))}
      </div>
    </div>
  );
}
