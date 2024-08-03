import type { Schema, Attribute } from '@strapi/strapi';

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'chartPie';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

export interface SectionPositionsSectionPositions extends Schema.Component {
  collectionName: 'components_section_positions_section_positions';
  info: {
    displayName: 'SectionPositions';
    icon: 'apps';
    description: '';
  };
  attributes: {
    a: Attribute.Component<'positions.positions'>;
    b: Attribute.Component<'positions.positions'>;
    c: Attribute.Component<'positions.positions'>;
    d: Attribute.Component<'positions.positions'>;
    e: Attribute.Component<'positions.positions'>;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'apps';
  };
  attributes: {
    companyName: Attribute.String & Attribute.Required;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.String & Attribute.Required;
    endDate: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    workSummery: Attribute.Text;
  };
}

export interface PositionsPositions extends Schema.Component {
  collectionName: 'components_positions_positions';
  info: {
    displayName: 'positions';
    icon: 'arrowDown';
  };
  attributes: {
    x: Attribute.Float;
    y: Attribute.Float;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Attribute.String & Attribute.Required;
    degree: Attribute.String & Attribute.Required;
    major: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'skills.skills': SkillsSkills;
      'section-positions.section-positions': SectionPositionsSectionPositions;
      'experience.experience': ExperienceExperience;
      'positions.positions': PositionsPositions;
      'education.education': EducationEducation;
    }
  }
}
