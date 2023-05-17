import * as React from 'react';
import SkillTile from './SkillTile';
import Skills from "./skills";

export interface ISkillsTabProps {}

export default function SkillsTab ({}: ISkillsTabProps) {

  return (
    <section className="flex flex-col gap-4 my-2 rounded-xl bg-violet-100 shadow-lg p-4 md:p-8">
      <div className="mb-4">
        <h1 className="font-extrabold text-4xl text-indigo-400">Tech Stack</h1>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {Skills.length >= 1 && Skills.map(SkillTile)}
      </div>
    
    </section>
  );
}
