"use client"
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
  rem,
} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
  image: {
    width: '100%',
  }
}));
type Props = {
  product: ArticleCardProps;
};
interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  rating: string;
  id: string
}

export function ProductCard({
  className,
  image,
  title,
  description,
  rating,
  id,
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx, theme } = useStyles();

  return (
    <Link
    href={`/product/${id}`}
    className="flex flex-col p-5 rounded group hover:scale-105 transition-transform ease-out duration-200"
  >
    <Card withBorder radius="md" className={cx(classes.card, className)} {...others}  w={'100%'}>
      <Card.Section>
        {/* <a {...linkProps}> */}
          <Image src={image} height={180} className={classes.image} alt={'product'}/>
        {/* </a> */}
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {rating}
      </Badge>

      <Text className={classes.title} fw={500} 
      // component="a" 
      // {...linkProps}
      >
        {title}
      </Text>

      <Text fz="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" className={classes.footer}>
        {/* <Center>
          <Avatar src={author.image} size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            {author.name}
          </Text>
        </Center> */}

        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart size="1rem" color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark size="1rem" color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size="1rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
    </Link>
  );
}