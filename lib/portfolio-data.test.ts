import test from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_EXPANDED_EXPERIENCE_IDS,
  PIPELINE_CAREER_ROLES,
  toggleAccordionIds,
} from "./portfolio-data";

test("default expanded experience IDs include top 2 recent positions", () => {
  assert.deepEqual([...DEFAULT_EXPANDED_EXPERIENCE_IDS], [1, 2]);
});

test("toggleAccordionIds collapses an open item and expands a closed item", () => {
  const afterClosingFirst = toggleAccordionIds([1, 2], 1);
  assert.deepEqual(afterClosingFirst, [2]);

  const afterOpeningThird = toggleAccordionIds(afterClosingFirst, 3);
  assert.deepEqual(afterOpeningThird, [2, 3]);
});

test("pipeline career roles preserve 7 chronological stages from Surveyor to Account Manager", () => {
  assert.equal(PIPELINE_CAREER_ROLES.length, 7);
  assert.equal(PIPELINE_CAREER_ROLES[0], "Surveyor");
  assert.equal(PIPELINE_CAREER_ROLES[6], "Account Manager");
});
