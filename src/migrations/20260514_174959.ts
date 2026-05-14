import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_checklist_grid_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_checklist_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_checklist_grid_items_order_idx\` ON \`pages_blocks_checklist_grid_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_checklist_grid_items_parent_id_idx\` ON \`pages_blocks_checklist_grid_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_checklist_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`eyebrow\` text,
  	\`title\` text DEFAULT 'Por que *a diferença* nessa parceria',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_checklist_grid_order_idx\` ON \`pages_blocks_checklist_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_checklist_grid_parent_id_idx\` ON \`pages_blocks_checklist_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_checklist_grid_path_idx\` ON \`pages_blocks_checklist_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_checklist_grid_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_checklist_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checklist_grid_items_order_idx\` ON \`_pages_v_blocks_checklist_grid_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checklist_grid_items_parent_id_idx\` ON \`_pages_v_blocks_checklist_grid_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_checklist_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`eyebrow\` text,
  	\`title\` text DEFAULT 'Por que *a diferença* nessa parceria',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checklist_grid_order_idx\` ON \`_pages_v_blocks_checklist_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checklist_grid_parent_id_idx\` ON \`_pages_v_blocks_checklist_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checklist_grid_path_idx\` ON \`_pages_v_blocks_checklist_grid\` (\`_path\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_checklist_grid_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_checklist_grid\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_checklist_grid_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_checklist_grid\`;`)
}
