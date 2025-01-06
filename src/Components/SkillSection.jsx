import React from "react";

function SkillSection({ skills }) {
  return (
    <div className="p-8 bg-white rounded-3xl shadow-[0px_0px_4px_0px_#00000040] flex flex-col gap-[20px]">
      <h2 className="text-[24px] text-[#1E1E1E] font-semibold">Main Skills</h2>
      <div className="grid grid-cols-4 justify-items-center max-sm:grid-cols-2   mb-6 max-sm:justify-items-start max-sm:px-5 flex-wrap">
        <div className="h-3 w-3 rounded-full bg-gray-300 " />
        <span className="text-[12px] font-semibold text-[#161616]">
          Developing
        </span>
        <div className="h-3 w-3 rounded-full bg-gray-500" />
        <span className="text-[12px] font-semibold text-[#161616]">
          Intermediate
        </span>
        <div className="h-3 w-3 rounded-full bg-gray-700" />
        <span className="text-[12px] font-semibold text-[#161616]">
          Advanced
        </span>
        <div className="h-3 w-3 rounded-full bg-gray-900" />
        <span className="text-[12px] font-semibold text-[#161616]">Expert</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-[14px] text-gray-800 w-1/4">
              {skill.name}
            </span>
            <div className="flex h-[39px] bg-gray-200 rounded-[4px] overflow-hidden mx-4 w-[350px]">
              <div
                className="h-full bg-gray-300"
                style={{ width: `${skill.level.developing}%` }}
              />
              <div
                className="h-full bg-gray-500"
                style={{ width: `${skill.level.intermediate}%` }}
              />
              <div
                className="h-full bg-gray-700"
                style={{ width: `${skill.level.advanced}%` }}
              />

              <div
                className="h-full bg-gray-900"
                style={{ width: `${skill.level.expert}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
