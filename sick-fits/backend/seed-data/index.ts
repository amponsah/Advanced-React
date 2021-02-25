import { programs } from './data';

export async function insertSeedData(ks: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${programs.length} Programs`);
  const { mongoose } = adapter;
  for (const program of programs) {
    console.log(`  🛍️ Adding Product: ${program.name}`);
    const { _id } = await mongoose
      .model('ProgramImage')
      .create({ image: program.photo, altText: program.description });
    program.photo = _id;
    await mongoose.model('Program').create(program);
  }
  console.log(`✅ Seed Data Inserted: ${programs.length} Programs`);
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`');
  process.exit();
}
