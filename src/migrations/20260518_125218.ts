import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_latest_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Blog',
  	\`title\` text DEFAULT '*Últimos posts* do blog',
  	\`button_label\` text DEFAULT 'Ver todos os posts',
  	\`button_href\` text DEFAULT '/posts',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_latest_posts_order_idx\` ON \`pages_blocks_latest_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_latest_posts_parent_id_idx\` ON \`pages_blocks_latest_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_latest_posts_path_idx\` ON \`pages_blocks_latest_posts\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_latest_portfolios\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Portfólio',
  	\`title\` text DEFAULT '*Últimos projetos* que entregamos',
  	\`button_label\` text DEFAULT 'Ver portfólio completo',
  	\`button_href\` text DEFAULT '/portfolio',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_latest_portfolios_order_idx\` ON \`pages_blocks_latest_portfolios\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_latest_portfolios_parent_id_idx\` ON \`pages_blocks_latest_portfolios\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_latest_portfolios_path_idx\` ON \`pages_blocks_latest_portfolios\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_latest_posts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Blog',
  	\`title\` text DEFAULT '*Últimos posts* do blog',
  	\`button_label\` text DEFAULT 'Ver todos os posts',
  	\`button_href\` text DEFAULT '/posts',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_latest_posts_order_idx\` ON \`_pages_v_blocks_latest_posts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_latest_posts_parent_id_idx\` ON \`_pages_v_blocks_latest_posts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_latest_posts_path_idx\` ON \`_pages_v_blocks_latest_posts\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_latest_portfolios\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`eyebrow\` text DEFAULT 'Portfólio',
  	\`title\` text DEFAULT '*Últimos projetos* que entregamos',
  	\`button_label\` text DEFAULT 'Ver portfólio completo',
  	\`button_href\` text DEFAULT '/portfolio',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_latest_portfolios_order_idx\` ON \`_pages_v_blocks_latest_portfolios\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_latest_portfolios_parent_id_idx\` ON \`_pages_v_blocks_latest_portfolios\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_latest_portfolios_path_idx\` ON \`_pages_v_blocks_latest_portfolios\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_latest_posts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_latest_portfolios\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_latest_posts\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_latest_portfolios\`;`)
}
