import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  Checkbox,
} from "@mantine/core";
import { useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "260px",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function Itemcard({ el, addProduct, removeProduct, addTyres }) {
  const { classes } = useStyles();
  const cartItems = useSelector((state) => state.products.products);

  return (
    <div
      style={{
        width: "300px",
        marginBottom: "10px",
      }}
    >
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={el.image} alt={el.model} width={280} />
        </Card.Section>

        <Group position="apart" mt="md">
          <div>
            <Text weight={500}>{el.model}</Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text size="sm" color="dimmed" className={classes.label}>
            Basic configuration
          </Text>

          <Group spacing={8} mb={-8}>
            <Center>
              <Text mr={10} size="s">
                {el.model}
              </Text>
            </Center>
            <Center>
              <Text mr={10} size="s">
                {el.year}
              </Text>
            </Center>
            <Center>
              <Text mr={10} size="s">
                {el.engine}
              </Text>
            </Center>
            <Center>
              <Text mr={10} size="s">
                {el.fuel}
              </Text>
            </Center>
            <Center>
              <Text mr={10} size="s">
                {el.transmision}
              </Text>
            </Center>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group spacing={20}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "250px",
                }}
              >
                <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                  {Number(el.price).toLocaleString()}€
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "250px",
                }}
              >
                {!cartItems.find((item) => item.id === el.id) ? (
                  <Button onClick={addProduct} mt={10}>
                    Add to cart
                  </Button>
                ) : (
                  <Button onClick={removeProduct} mt={10}>
                    Remove from cart
                  </Button>
                )}
              </div>
            </div>
          </Group>
        </Card.Section>
      </Card>
    </div>
  );
}
